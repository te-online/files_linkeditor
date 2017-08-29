<?php

$app = new \OCA\Files_External_Links\AppInfo\Application();
$eventDispatcher = \OC::$server->getEventDispatcher();

OCP\Util::addScript('files_external_links', 'merged');
OCP\Util::addStyle('files_external_links', 'merged');

