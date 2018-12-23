import { collection } from 'ember-cli-page-object';
import bannerNotification from './banner-notification';

export default {
	scope: '.wds-banner-notification__container',

	notifications: collection(bannerNotification.scope, {
		icon: bannerNotification.icon,
		close: bannerNotification.close
	}),
};
