import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';

export default Component.extend({
	wdsBannerNotifications: service(),

	classNames: 'wds-banner-notification__container',

	model: alias('wdsBannerNotifications.model'),

	actions: {
		onClose(id) {
			const notificationToClose = this.model.findBy('id', id);

			this.model.removeObject(notificationToClose);

			if (typeof notificationToClose.onClose === 'function') {
				notificationToClose.onClose();
			}
		}
	}
});
