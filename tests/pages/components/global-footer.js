import { text, collection, attribute, clickable } from 'ember-cli-page-object';

export default {
	scope: 'footer.wds-global-footer',

	header: {
		scope: '.wds-global-footer__header',

		logo: {
			scope: '.wds-global-footer__header-logo',
		},

		click: clickable('.wds-global-footer__header-logo'),
	},

	main: {
		scope: '.wds-global-footer__main',

		fandom: {
			scope: '.wds-global-footer__fandom-sections',

			overview: {
				scope:
					'section.wds-global-footer__fandom-section.wds-is-fandom-overview',

				header: text('.wds-global-footer__section-header'),

				links: collection(
					'ul.wds-global-footer__links-list li.wds-global-footer__links-list-item',
					{
						link: { scope: 'a' },
						text: text('div'),
					},
				),
			},

			follow: {
				scope:
					'section.wds-global-footer__fandom-section.wds-is-follow-us',

				header: text('.wds-global-footer__section-header'),

				links: collection(
					'ul.wds-global-footer__links-list li.wds-global-footer__links-list-item',
					{
						click: clickable('.wds-global-footer__link'),
						text: text('div'),
					},
				),
			},
		},

		wikia: {
			scope: '.wds-global-footer__wikia-sections',

			overview: {
				scope:
					'section.wds-global-footer__wikia-section.wds-is-company-overview',

				header: text('.wds-global-footer__section-header'),

				links: collection(
					'ul.wds-global-footer__links-list li.wds-global-footer__links-list-item',
					{
						link: { scope: 'a' },
						text: text('div'),
					},
				),
			},

			community: {
				scope:
					'section.wds-global-footer__wikia-section.wds-is-company-overview',

				header: text('.wds-global-footer__section-header'),

				links: collection(
					'ul.wds-global-footer__links-list li.wds-global-footer__links-list-item',
					{
						link: { scope: 'a' },
						text: text('div'),
					},
				),
			},

			createWiki: {
				scope:
					'section.wds-global-footer__wikia-section.wds-is-create-wiki',

				description: text('.wds-global-footer__section-description'),

				button: {
					scope: '.wds-global-footer__link',

					href: attribute('href'),
				},
			},

			apps: {
				scope:
					'section.wds-global-footer__wikia-section.wds-is-community-apps',

				header: text('.wds-global-footer__section-header'),
				description: text('.wds-global-footer__section-description'),

				links: collection(
					'ul.wds-global-footer__links-list li.wds-global-footer__links-list-item',
					{
						link: { scope: 'a' },
						text: text('div'),
					},
				),
			},

			advertise: {
				scope:
					'section.wds-global-footer__wikia-section.wds-is-advertise',

				header: text('.wds-global-footer__section-header'),

				links: collection(
					'ul.wds-global-footer__links-list li.wds-global-footer__links-list-item',
					{
						link: { scope: 'a' },
						text: text('div'),
					},
				),
			},
		},
	},

	footer: {
		scope: '.wds-global-footer__bottom-bar',

		text: text('.wds-global-footer__bottom-bar-row'),
	},
};
