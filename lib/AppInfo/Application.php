<?php

namespace OCA\Files_Linkeditor\AppInfo;

use OCA\Files\Event\LoadAdditionalScriptsEvent;
use OCA\Files_Sharing\Event\BeforeTemplateRenderedEvent;
use OCP\AppFramework\App;
use OCP\AppFramework\Bootstrap\IBootstrap;
use OCP\AppFramework\Bootstrap\IBootContext;
use OCP\AppFramework\Bootstrap\IRegistrationContext;
use OCP\EventDispatcher\Event;
use OCP\EventDispatcher\IEventListener;
use OCP\Util;

class Application extends App implements IBootstrap {
	public function __construct(array $urlParams = []) {
		parent::__construct("files_linkeditor", $urlParams);
	}

	public function register(IRegistrationContext $context): void {
		$context->registerEventListener(LoadAdditionalScriptsEvent::class, LoadAdditionalScriptsListener::class);
		$context->registerEventListener(BeforeTemplateRenderedEvent::class, BeforeTemplateRenderedListener::class);
	}

	public function boot(IBootContext $context): void {
	}
}

class BeforeTemplateRenderedListener implements IEventListener {
	public function handle(Event $event): void {
		Util::addStyle("files_linkeditor", "linkeditor");
		Util::addScript("files_linkeditor", "bundle");
	}
}

class LoadAdditionalScriptsListener implements IEventListener {
	public function handle(Event $event): void {
		Util::addStyle("files_linkeditor", "linkeditor");
		Util::addScript("files_linkeditor", "bundle");
	}
}
