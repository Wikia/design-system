import { text, collection, clickable } from 'ember-cli-page-object';

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

		fandom_overview: {
			scope: 'section.wds-global-footer__section.wds-is-fandom-overview',

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
			scope: 'section.wds-global-footer__section.wds-is-follow-us',

			header: text('.wds-global-footer__section-header'),

			links: collection(
				'ul.wds-global-footer__links-list li.wds-global-footer__links-list-item',
				{
					click: clickable('.wds-global-footer__link'),
					text: text('div'),
				},
			),
		},

		site_overview: {
			scope: 'section.wds-global-footer__section.wds-is-site-overview',

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
			scope: 'section.wds-global-footer__section.wds-is-community',

			header: text('.wds-global-footer__section-header'),

			links: collection(
				'ul.wds-global-footer__links-list li.wds-global-footer__links-list-item',
				{
					link: { scope: 'a' },
					text: text('div'),
				},
			),
		},

		fandom_apps: {
			scope: 'section.wds-global-footer__section.wds-is-fandom-apps',

			header: text('.wds-global-footer__section-header'),
			description: text('.wds-global-footer__section-description'),
		},

		fandom_stores: {
			scope: 'section.wds-global-footer__section.wds-is-fandom-stores',

			links: collection(
				'ul.wds-global-footer__links-list li.wds-global-footer__links-list-item',
				{
					link: { scope: 'a' },
					text: text('div'),
				},
			),
		},

		ddb_stores: {
			scope: 'section.wds-global-footer__section.wds-is-ddb-stores',

			links: collection(
				'ul.wds-global-footer__links-list li.wds-global-footer__links-list-item',
				{
					link: { scope: 'a' },
					text: text('div'),
				},
			),
		},

		advertise: {
			scope: 'section.wds-global-footer__section.wds-is-advertise',

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

	footer: {
		scope: '.wds-global-footer__bottom-bar',

		text: text('.wds-global-footer__bottom-bar-row'),
	},
};
