<?php

declare(strict_types=1);

namespace OCA\Files_Linkeditor\AppInfo;

use OCA\Files\Event\LoadAdditionalScriptsEvent;
use OCA\Files_Sharing\Event\BeforeTemplateRenderedEvent;
use OCA\Files_Linkeditor\Listeners\LoadFilesScriptsStylesListener;
use OCA\Files_Linkeditor\Listeners\LoadPublicScriptsStylesListener;
use OCA\Files_Linkeditor\Listeners\CSPListener;
use OCP\AppFramework\App;
use OCP\AppFramework\Bootstrap\IBootstrap;
use OCP\AppFramework\Bootstrap\IBootContext;
use OCP\AppFramework\Bootstrap\IRegistrationContext;
use OCP\Security\CSP\AddContentSecurityPolicyEvent;

class Application extends App implements IBootstrap {
	public function __construct(array $urlParams = []) {
		parent::__construct("files_linkeditor", $urlParams);
	}

	public function register(IRegistrationContext $context): void {
		$context->registerEventListener(LoadAdditionalScriptsEvent::class, LoadFilesScriptsStylesListener::class);
		$context->registerEventListener(AddContentSecurityPolicyEvent::class, CSPListener::class);
		$context->registerEventListener(BeforeTemplateRenderedEvent::class, LoadPublicScriptsStylesListener::class);
	}

	public function boot(IBootContext $context): void {
	}
}
