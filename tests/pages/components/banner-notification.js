import {
  text,
  clickable,
  hasClass,
  is
} from 'ember-cli-page-object';

export default {
	scope: '.wds-banner-notification',

	text: text('.wds-banner-notification__text'),

	isAlert: hasClass('wds-alert'),
	isWarning: hasClass('wds-warning'),
	isSuccess: hasClass('wds-success'),
	isMessage: hasClass('wds-message'),

	icon: {
		scope: '.wds-banner-notification__icon use',

		isAlert: is('[*|href="#wds-icons-error-small"]'),
		isWarning: is('[*|href="#wds-icons-alert-small"]'),
		isSuccess: is('[*|href="#wds-icons-checkmark-small"]'),
		isMessage: is('[*|href="#wds-icons-flag-small"]'),
	},

	close: clickable('.wds-banner-notification__close')
};
