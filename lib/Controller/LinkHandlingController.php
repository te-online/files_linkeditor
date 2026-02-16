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
}