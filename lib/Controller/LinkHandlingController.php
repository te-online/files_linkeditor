<?php

/**
 * @author Björn Schießle <schiessle@nextcloud.com>,
 * adjustments by Thomas Ebert <thomas@thomasebert.net>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */


namespace OCA\Files_Linkeditor\Controller;


use OC\HintException;
use OCP\AppFramework\Controller;
use OCP\AppFramework\Http;
use OCP\AppFramework\Http\DataResponse;
use OCP\Files\File;
use OCP\Files\Folder;
use OCP\Files\ForbiddenException;
use OCP\IL10N;
use OCP\ILogger;
use OCP\IRequest;
use OCP\Lock\LockedException;
use Psr\Log\LoggerInterface;

class LinkHandlingController extends Controller {

	/** @var IL10N */
	private $l;

	/** @var LoggerInterface logger */
	private $logger;

	/** @var Folder */
	private $userFolder;

	/**
	 * @NoAdminRequired
	 *
	 * @param string $AppName
	 * @param IRequest $request
	 * @param IL10N $l10n
	 * @param ILogger $logger
	 * @param Folder $userFolder
	 */
	public function __construct(
		$AppName,
		IRequest $request,
		IL10N $l10n,
		LoggerInterface $logger,
		Folder $userFolder
	) {
		parent::__construct($AppName, $request);
		$this->l = $l10n;
		$this->logger = $logger;
		$this->userFolder = $userFolder;
	}

	/**
	 * load text file
	 *
	 * @NoAdminRequired
	 *
	 * @param string $dir
	 * @param string $filename
	 * @return DataResponse
	 */
	public function load($dir, $filename) {
		try {
			if (!empty($filename)) {
				$path = $dir . '/' . $filename;

				/** @var File $file */
				$file = $this->userFolder->get($path);

				if ($file instanceof Folder) {
					return new DataResponse(['message' => $this->l->t('You cannot open a folder')], Http::STATUS_BAD_REQUEST);
				}

				// default of 4MB
				$maxSize = 4194304;
				if ($file->getSize() > $maxSize) {
					return new DataResponse(['message' => (string)$this->l->t('This file is too big to be opened. Please download the file instead.')], Http::STATUS_BAD_REQUEST);
				}
				$fileContents = $file->getContent();
				if ($fileContents !== false) {
					$writable = $file->isUpdateable();
					$mime = $file->getMimeType();
					$mTime = $file->getMTime();
					$encoding = mb_detect_encoding($fileContents . 'a', 'UTF-8, WINDOWS-1252, ISO-8859-15, ISO-8859-1, ASCII', true);
					if ($encoding === '') {
						// set default encoding if it couldn't be detected
						$encoding = 'ISO-8859-15';
					}
					$fileContents = iconv($encoding, 'UTF-8', $fileContents);
					return new DataResponse(
						[
							'filecontents' => $fileContents,
							'writeable' => $writable,
							'mime' => $mime,
							'mtime' => $mTime
						],
						Http::STATUS_OK
					);
				} else {
					return new DataResponse(['message' => (string)$this->l->t('Cannot read the file.')], Http::STATUS_BAD_REQUEST);
				}
			} else {
				return new DataResponse(['message' => (string)$this->l->t('Invalid file path supplied.')], Http::STATUS_BAD_REQUEST);
			}
		} catch (LockedException $e) {
			$message = (string) $this->l->t('The file is locked.');
			return new DataResponse(['message' => $message], Http::STATUS_BAD_REQUEST);
		} catch (ForbiddenException $e) {
			return new DataResponse(['message' => $e->getMessage()], Http::STATUS_BAD_REQUEST);
		} catch (HintException $e) {
			$message = (string)$e->getHint();
			return new DataResponse(['message' => $message], Http::STATUS_BAD_REQUEST);
		} catch (\Exception $e) {
			$message = (string)$this->l->t('An internal server error occurred.');
			return new DataResponse(['message' => $message], Http::STATUS_BAD_REQUEST);
		}
	}

	/**
	 * save text file
	 *
	 * @NoAdminRequired
	 *
	 * @param string $path
	 * @param string $filecontents
	 * @param integer $mtime
	 * @return DataResponse
	 */
	public function save($path, $filecontents, $mtime) {
		try {
			if ($path !== '' && (is_int($mtime) && $mtime > 0)) {

				/** @var File $file */
				$file = $this->userFolder->get($path);

				if ($file instanceof Folder) {
					return new DataResponse(['message' => $this->l->t('You can not write to a folder')], Http::STATUS_BAD_REQUEST);
				}

				// Get file mtime
				$filemtime = $file->getMTime();
				if ($mtime !== $filemtime) {
					// Then the file has changed since opening
					$this->logger->error(
						'File: ' . $path . ' modified since opening.',
						['app' => 'files_linkeditor']
					);
					return new DataResponse(
						['message' => $this->l->t('Cannot save file as it has been modified since opening')],
						Http::STATUS_BAD_REQUEST
					);
				} else {
					// File same as when opened, save file
					if ($file->isUpdateable()) {
						$filecontents = iconv(mb_detect_encoding($filecontents), 'UTF-8', $filecontents);
						try {
							$file->putContent($filecontents);
						} catch (LockedException $e) {
							$message = (string) $this->l->t('The file is locked.');
							return new DataResponse(['message' => $message], Http::STATUS_BAD_REQUEST);
						} catch (ForbiddenException $e) {
							return new DataResponse(['message' => $e->getMessage()], Http::STATUS_BAD_REQUEST);
						}
						// Clear statcache
						clearstatcache();
						// Get new mtime
						$newmtime = $file->getMTime();
						$newsize = $file->getSize();
						return new DataResponse(['mtime' => $newmtime, 'size' => $newsize], Http::STATUS_OK);
					} else {
						// Not writeable!
						$this->logger->error(
							'User does not have permission to write to file: ' . $path,
							['app' => 'files_linkeditor']
						);
						return new DataResponse(
							['message' => $this->l->t('Insufficient permissions')],
							Http::STATUS_BAD_REQUEST
						);
					}
				}
			} else if ($path === '') {
				$this->logger->error('No file path supplied');
				return new DataResponse(['message' => $this->l->t('File path not supplied')], Http::STATUS_BAD_REQUEST);
			} else {
				$this->logger->error('No file mtime supplied', ['app' => 'files_linkeditor']);
				return new DataResponse(['message' => $this->l->t('File mtime not supplied')], Http::STATUS_BAD_REQUEST);
			}
		} catch (HintException $e) {
			$message = (string)$e->getHint();
			return new DataResponse(['message' => $message], Http::STATUS_BAD_REQUEST);
		} catch (\Exception $e) {
			$message = (string)$this->l->t('An internal server error occurred.');
			return new DataResponse(['message' => $message], Http::STATUS_BAD_REQUEST);
		}
	}
}