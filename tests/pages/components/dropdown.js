import {
	notHasClass,
	hasClass,
	clickable,
	attribute,
	is,
} from 'ember-cli-page-object';
import attr from '../helpers/attr';

export default {
	scope: '.wds-dropdown',

	isActive: hasClass('wds-is-active'),
	hasShadow: hasClass('wds-has-shadow'),
	noChevron: hasClass('wds-no-chevron'),
	hasDarkShadow: hasClass('wds-has-dark-shadow'),
	isTouchDevice: hasClass('wds-is-touch-device'),

	toggle: {
		scope: '.wds-dropdown__toggle',
		href: attribute('href'),
		click: clickable('span'),
		isDiv: is('div'),
		isLink: is('a'),

		attr,

		icon: {
			scope: '.wds-dropdown__toggle-chevron',
		},
	},

	content: {
		scope: '.wds-dropdown__content',

		isLeftAligned: hasClass('wds-is-left-aligned'),
		isRightAligned: hasClass('wds-is-right-aligned'),
		isScrollable: notHasClass('wds-is-not-scrollable'),
		attr,
	},

	secondLevel: {
		scope: '.wds-dropdown-level-2',

		toggle: {
			scope: '.wds-dropdown-level-2__toggle',
			click: clickable('span'),
			attr,

			icon: {
				scope: '.wds-dropdown-chevron',
			},
		},

		content: {
			scope: '.wds-dropdown-level-2__content',
			isLeftAligned: hasClass('wds-is-left-aligned'),
			isRightAligned: hasClass('wds-is-right-aligned'),
			isScrollable: notHasClass('wds-is-not-scrollable'),
			attr
		},
	},
};
