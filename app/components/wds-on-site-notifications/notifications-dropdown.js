import Component from '@ember/component';
import { inject as service } from '@ember/service';

export default Component.extend({
	tagName: '',
	wdsOnSiteNotifications: service(),

	didInsertElement() {
		this._super(...arguments);

		this.get('wdsOnSiteNotifications').loadUnreadNotificationCount();
	},

	actions: {
		onOpen() {
			this.track({
				label: 'open-menu',
				category: 'on-site-notifications',
				action: 'click',
				value: this.get('wdsOnSiteNotifications').getUnreadCount()
			});

			this.get('wdsOnSiteNotifications').loadFirstPage();
		}
	}
});
