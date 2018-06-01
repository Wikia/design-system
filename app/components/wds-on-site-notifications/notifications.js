import {inject as service} from '@ember/service';
import {oneWay} from '@ember/object/computed';
import Component from '@ember/component';
import NotificationsScrollMenuMixin from '../../mixins/notifications-scroll-menu';
import NotificationsUnreadCount from '../../mixins/notifications-unread-count';
import MarkAllNotificationsMixin from '../../mixins/mark-all-notifications';
// import {trackOpenMenu} from '../../utils/tracking/notifications-tracker';

export default Component.extend(NotificationsScrollMenuMixin, MarkAllNotificationsMixin, NotificationsUnreadCount, {
	notifications: service(),
	notificationsList: oneWay('notifications.model.data'),
	isLoadingNewResults: oneWay('notifications.isLoading'),

	init() {
		this._super(...arguments);
	},

	didInsertElement() {
		this._super(...arguments);

		this.get('notifications').loadUnreadNotificationCount();
	},

	actions: {
		onOpen() {
			// TODO tracking
			// trackOpenMenu(this.get('notifications').getUnreadCount());
			this.get('notifications').loadFirstPage();
		}
	}
});
