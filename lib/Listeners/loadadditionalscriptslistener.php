<?php

declare(strict_types=1);

namespace OCA\Files_Linkeditor\Listeners;

use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\Util;

class LoadAdditionalScriptsListener implements IEventListener {
	public function handle(Event $event): void {
		Util::addStyle("files_linkeditor", "linkeditor");
		Util::addScript("files_linkeditor", "linkeditor");
	}
}
