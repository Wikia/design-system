import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { oneWay } from '@ember/object/computed';

export default Component.extend({
	wdsOnSiteNotifications: service(),

	tagName: 'ul',
	classNames: [
		'wds-has-lines-between',
		'wds-notifications__notification-list',
		'wds-list'
	],
	classNameBindings: ['isLoadingNewResults'],

	almostBottom: 100,

	isLoadingNewResults: oneWay('wdsOnSiteNotifications.isLoading'),
	notificationsList: oneWay('wdsOnSiteNotifications.model.data'),

	didInsertElement() {
		this._super(...arguments);

		this.onScroll = this.onScroll.bind(this);

		this.element.addEventListener('scroll', this.onScroll);
		this.element.addEventListener('mousewheel', this.onMouseWheel);
		this.element.addEventListener('DOMMouseScroll', this.onMouseWheel);
	},

	willDestroyElement() {
		this._super(...arguments);

		this.element.removeEventListener('scroll', this.onScroll);
		this.element.addEventListener('mousewheel', this.onMouseWheel);
		this.element.addEventListener('DOMMouseScroll', this.onMouseWheel);
	},

	onScroll(event) {
		if (this.hasAlmostScrolledToTheBottom(event.target)) {
			this.wdsOnSiteNotifications.loadNextPage();
		}
	},

	onMouseWheel(event) {
		const delta = -event.wheelDelta || event.detail,
			scrollTop = this.scrollTop;
		if ((delta < 0 && scrollTop === 0) || (delta > 0 && this.scrollHeight - this.clientHeight - scrollTop === 0)) {
			event.preventDefault();
		}
	},

	/**
	 * Has the user scrolled almost to the bottom?
	 * @private
	 */
	hasAlmostScrolledToTheBottom(element) {
		return element.scrollHeight - this.almostBottom <= element.scrollTop + element.offsetHeight;
	},
});
