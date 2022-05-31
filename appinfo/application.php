<?php
/**
 * @copyright Copyright (c) 2018, Thomas Ebert (thomas@thomasebert.net)
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

namespace OCA\Files_Linkeditor\AppInfo;

use OCA\Files_Linkeditor\Controller\LinkHandlingController;
use OCP\AppFramework\App;
use OCP\AppFramework\IAppContainer;
use OCP\AppFramework\Bootstrap\IBootContext;
use OCP\AppFramework\Bootstrap\IBootstrap;

class Application extends App implements IBootstrap {
	/**
	 * @param array $urlParams
	 */
	public function __construct(array $urlParams = []) {
		parent::__construct("files_linkeditor", $urlParams);

		$container = $this->getContainer();
		$server = $container->getServer();

		$container->registerService("LinkHandlingController", function (IAppContainer $c) use ($server) {
			$user = $server->getUserSession()->getUser();
			if ($user) {
				$uid = $user->getUID();
			} else {
				throw new \BadMethodCallException("no user logged in");
			}
			return new LinkHandlingController(
				$c->getAppName(),
				$server->getRequest(),
				$server->getL10N($c->getAppName()),
				$server->getLogger(),
				$server->getUserFolder($uid)
			);
		});
	}

	public function boot(IBootContext $context): void {
		$eventDispatcher = \OC::$server->getEventDispatcher();
		$eventDispatcher->addListener("OCA\Files::loadAdditionalScripts", function () {
			OCP\Util::addScript("files_linkeditor", "linkeditor");
			OCP\Util::addStyle("files_linkeditor", "linkeditor");
		});

		$eventDispatcher->addListener("OCA\Files_Sharing::loadAdditionalScripts", function () {
			OCP\Util::addScript("files_linkeditor", "linkeditor");
			OCP\Util::addStyle("files_linkeditor", "linkeditor");
		});
	}
}
