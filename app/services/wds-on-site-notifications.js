import { getOwner } from '@ember/application';
import { computed } from '@ember/object';
import { gt } from '@ember/object/computed';
import Service, { inject as service } from '@ember/service';

import WdsOnSiteNotificationsModel from '../models/wds-on-site-notifications/wds-on-site-notifications';

export default Service.extend({
	model: null,
	isLoading: false,
	nextPage: null,

	currentUser: service(),
	logger: service(),

	unreadCountWithLimit: computed('model.unreadCount', function () {
		const count = this.get('model.unreadCount');
		return count > 99 ?  '99+' : count;
	}),
	hasUnread: gt('model.unreadCount', 0),

	init() {
		this._super(...arguments);

		this.set('model', WdsOnSiteNotificationsModel.create(getOwner(this).ownerInjection()));
	},

	loadUnreadNotificationCount() {
		return this.get('model')
			.loadUnreadNotificationCount()
			.catch((err) => {
				this.get('logger').warn(`Couldn't load notification count`, err);
			});
	},

	loadFirstPage() {
		if (
			this.get('isLoading') === true ||
			this.get('nextPage') !== null ||
			this.get('firstPageLoaded') === true
		) {
			return;
		}

		this.set('firstPageLoaded', true);
		this.set('isLoading', true);
		this.get('model')
			.loadFirstPageReturningNextPageLink()
			.then((nextPage) => {
				this.set('nextPage', nextPage);
			})
			.catch((err) => {
				this.get('logger').warn(`Couldn't load first page`, err);
			})
			.then(() => {
				this.set('isLoading', false);
			});
	},

	loadNextPage() {
		if (this.get('isLoading') === true || this.get('nextPage') === null) {
			return;
		}
		this.set('isLoading', true);

		this.get('model')
			.loadPageReturningNextPageLink(this.get('nextPage'))
			.then((nextPage) => {
				this.set('nextPage', nextPage);
			})
			.catch((err) => {
				this.get('logger').warn(`Couldn't load more notifications`, err);
			})
			.then(() => {
				this.set('isLoading', false);
			});
	},

	markAllAsRead() {
		this.get('model').markAllAsRead();
	},

	markAsRead(notification, willUnloadPage = false) {
		return this.get('model').markAsRead(notification, willUnloadPage);
	},

	getUnreadCount() {
		return this.get('model.unreadCount');
	},

	goToDestination(notification) {
		// TODO check if it's a local url and use transitionTo or delegate to app
		window.location.href = notification.get('latestEventUri');
	}
});
