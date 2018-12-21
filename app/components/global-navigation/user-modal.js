import { inject as service } from '@ember/service';
import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
	classNames: ['wds-global-navigation__modal', 'wds-user-modal'],
	classNameBindings: ['isOpen::wds-is-hidden'],

	wdsOnSiteNotifications: service(),

	almostBottom: 200,

	init() {
		this._super(...arguments);

		this.onTouchMove = this.onTouchMove.bind(this);
	},

	didInsertElement() {
		this._super(...arguments);

		this.element.addEventListener('touchmove', this.onTouchMove);
	},

	willDestroyElement() {
		this._super(...arguments);

		this.element.removeEventListener('touchmove', this.onTouchMove);
	},

	didReceiveAttrs() {
		this._super(...arguments);

		if (this.isOpen) {
			this.track({
				label: 'open-menu',
				category: 'on-site-notifications',
				action: 'click',
				value: this.wdsOnSiteNotifications.getUnreadCount()
			});

			this.wdsOnSiteNotifications.loadFirstPage();
		}
	},

	signOutModel: computed('user.items', function() {
		return this.get('user.items').filter( (item) => item.type === 'link-logout')[0];
	}),

	viewProfileLink: computed('user.items', function(){
		return this.get('user.items').filter( (item) => item['tracking-label'] === 'account.profile')[0]['href'];
	}),

	onTouchMove() {
		if (this.hasAlmostScrolledToTheBottom()) {
			this.wdsOnSiteNotifications.loadNextPage();
		}
	},

	/**
	 * Has the user scrolled almost to the bottom?
	 * @private
	 */
	hasAlmostScrolledToTheBottom() {
		const notificationsList = this.element.querySelector('.wds-notifications__notification-list');
		const userInfo = this.element.querySelector('.wds-user-modal__info');

		return notificationsList.offsetHeight - this.almostBottom <= this.element.scrollTop + userInfo.offsetHeight;
	},
});
