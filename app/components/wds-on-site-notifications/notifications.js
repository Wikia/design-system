import {inject as service} from '@ember/service';
import {oneWay, or} from '@ember/object/computed';
import Component from '@ember/component';
import NotificationsUnreadCount from '../../mixins/notifications-unread-count';

export default Component.extend(NotificationsUnreadCount, {
	tagName: '',
	notifications: service(),

	notificationsList: oneWay('notifications.model.data'),
	isNotificationsListVisible: or('notificationsList.length', 'notifications.isLoading'),

	actions: {
		markAllAsRead() {
			this.track({
				action: 'click',
				category: 'on-site-notifications',
				label: 'mark-all-as-read'
			});
			this.get('notifications').markAllAsRead();
		}
	}
});
