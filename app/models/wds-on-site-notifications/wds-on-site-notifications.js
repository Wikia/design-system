import RSVP from 'rsvp';

import { getOwner } from '@ember/application';
import { A } from '@ember/array';
import { inject as service } from '@ember/service';
import EmberObject, { get } from '@ember/object';
import { convertToIsoString } from '@wikia/ember-fandom/utils/iso-date-time';

import Notification from './wds-on-site-notification';

export default EmberObject.extend({
	fetch: service(),
	logger: service(),

	unreadCount: 0,
	data: null,

	init() {
		this._super(...arguments);
		this.set('data', A());
	},

	getNewestNotificationISODate() {
		return convertToIsoString(this.get('data.0.timestamp'));
	},

	loadFirstPageReturningNextPageLink() {
		return this.fetch
			.fetchFromOnSiteNotifications('/notifications?contentType=discussion-upvote&contentType=discussion-post&contentType=announcement-target')
			.then((data) => {
				this.addNotifications(data.notifications);
				return this.getNext(data);
			});
	},

	loadPageReturningNextPageLink(nextPageLink) {
		return this.fetch
			.fetchFromOnSiteNotifications(nextPageLink)
			.then((data) => {
				this.addNotifications(data.notifications);
				return this.getNext(data);
			});
	},

	getNext(data) {
		return get(data, '_links.next') || null;
	},

	markAsRead(notification, willUnloadPage) {
		if (!notification.isUnread) {
			return RSVP.resolve();
		}

		return notification.markAsRead(willUnloadPage)
			.then(() => {
				this.decrementProperty('unreadCount');
			});
	},

	markAllAsRead() {
		const since = this.getNewestNotificationISODate();

		return this.fetch
			.fetchFromOnSiteNotifications(`/notifications/mark-all-as-read`, {
				body: JSON.stringify({ since }),
				headers: {
					'Content-Type': 'application/json'
				},
				method: 'POST',
			}).then(() => {
				this.data.setEach('isUnread', false);
				this.set('unreadCount', 0);
			});
	},

	addNotifications(notifications) {
		const notificationModels = notifications.map((notificationApiData) => {
			const notification = Notification.create(getOwner(this).ownerInjection());
			notification.setNormalizedData(notificationApiData);

			return notification;
		});

		this.data.pushObjects(notificationModels);
	},

	loadUnreadNotificationCount() {
		return this.fetch
			.fetchFromOnSiteNotifications('/notifications/unread-count?contentType=discussion-upvote&contentType=discussion-post&contentType=announcement-target')
			.then((result) => {
				this.set('unreadCount', result.unreadCount);
			}).catch((error) => {
				this.set('unreadCount', 0);
				this.logger
					.error('Setting notifications unread count to 0 because of the API fetch error', error);
			});
	}
});
