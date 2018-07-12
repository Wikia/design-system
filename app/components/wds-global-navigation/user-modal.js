import { inject as service } from '@ember/service';
import Component from '@ember/component';
import { observer, computed } from '@ember/object';

export default Component.extend({
	classNames: ['wds-global-navigation__modal', 'wds-user-modal'],
	classNameBindings: ['isOpen::wds-is-hidden'],

	wdsOnSiteNotifications: service(),

	almostBottom: 200,

	openCloseObserver: observer('isOpen', function () {
		if (this.get('isOpen')) {
			this.track({
				label: 'open-menu',
				category: 'on-site-notifications',
				action: 'click',
				value: this.get('wdsOnSiteNotifications').getUnreadCount()
			});

			this.get('wdsOnSiteNotifications').loadFirstPage();
		}

	}),

	signOutModel: computed('user.items', function() {
		return this.get('user.items').filter( (item) => item.type === 'link-logout')[0];
	}),

	viewProfileLink: computed('user.items', function(){
		return this.get('user.items').filter( (item) => item['tracking-label'] === 'account.profile')[0]['href'];
	}),

	touchMove() {
		if (this.hasAlmostScrolledToTheBottom()) {
			this.get('wdsOnSiteNotifications').loadNextPage();
		}
	},

	/**
	 * Has the user scrolled almost to the bottom?
	 * @private
	 */
	hasAlmostScrolledToTheBottom() {
		const notificationsList = this.element.querySelector('.wds-notifications__notification-list');
		const userInfo = this.element.querySelector('.wds-user-modal__info');

		return notificationsList.offsetHeight - this.get('almostBottom') <= this.element.scrollTop + userInfo.offsetHeight;
	},
});
