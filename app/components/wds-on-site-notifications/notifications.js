import Component from '@ember/component';
import { oneWay, or } from '@ember/object/computed';
import { inject as service } from '@ember/service';

import WdsOnSiteNotificationsUnreadCount from '../../mixins/wds-on-site-notifications-unread-count';

export default Component.extend(WdsOnSiteNotificationsUnreadCount, {
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
			this.get('wdsOnSiteNotifications').markAllAsRead();
		}
	}
});
