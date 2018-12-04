import Component from '@ember/component';
import { oneWay, or } from '@ember/object/computed';
import { inject as service } from '@ember/service';

export default Component.extend({
	tagName: '',
	wdsOnSiteNotifications: service(),

	notificationsList: oneWay('wdsOnSiteNotifications.model.data'),
	isNotificationsListVisible: or('notificationsList.length', 'wdsOnSiteNotifications.isLoading'),

	actions: {
		markAllAsRead() {
			this.track({
				action: 'click',
				category: 'on-site-notifications',
				label: 'mark-all-as-read'
			});
			this.wdsOnSiteNotifications.markAllAsRead();
		}
	}
});
