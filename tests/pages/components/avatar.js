import { attribute } from 'ember-cli-page-object';

export default {
	scope: '.wds-avatar',

	link: {
		scope: 'a',
		href: attribute('href'),
	},

	badge: {
		scope: '.wds-avatar__badge',
		name: attribute('xlink:href', 'svg use'),
		title: attribute('title')
	},

	image: {
		scope: 'img.wds-avatar__image',
		src: attribute('src'),
		alt: attribute('alt'),
		title: attribute('title')
	},

	default: {
		avatar: {
			scope: 'svg.wds-avatar__image',
		},

		border: {
			scope: '.wds-avatar__inner-border',
			alt: attribute('alt'),
			title: attribute('title')
		},
	},
};
