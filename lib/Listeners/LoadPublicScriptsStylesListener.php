<?php

declare(strict_types=1);

namespace OCA\Files_Linkeditor\Listeners;

use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\Util;

class LoadPublicScriptsStylesListener implements IEventListener {
	public function handle(Event $event): void {
		Util::addScript("files_linkeditor", "linkeditor");
		Util::addStyle("files_linkeditor", "linkeditor");
	}
}
