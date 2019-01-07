import { clickable, attribute } from 'ember-cli-page-object';

export default {
	scope: '.wds-community-bar',

	sitename: {
		scope: '.wds-community-bar__sitename',

		click: clickable('a'),
	},

	discussionLink: {
		scope: '.wds-community-bar__discussions',
		href: attribute('href')
	},

	navigation: {
		scope: '.wds-community-bar__navigation',

		open: clickable('.wds-dropdown__toggle')
	}
};
