import $ from 'jquery';

import Mixin from '@ember/object/mixin';
import {on} from '@ember/object/evented';
import {run} from '@ember/runloop';

export default Mixin.create({
	classNames: ['notifications-scroll-menu'],
	classNameBindings: ['isLoadingNewResults'],
	scrollableElement: '.scrolling-part',
	almostBottom: 100,

	bindScrollObserver: on('didRender', function () {
		run.later(() => {
			this.$(this.get('scrollableElement')).on('scroll', this.onScroll.bind(this));
			this.$(this.get('scrollableElement')).on('mousewheel DOMMouseScroll', this.onMouseWheel);
		}, 0);
	}),

	onScrollRemover: on('willDestroyElement', function () {
		this.$(this.get('scrollableElement')).off('scroll', this.onScroll.bind(this));
	}),

	onScroll(event) {
		const target = $(event.target);

		if (this.hasAlmostScrolledToTheBottom(target)) {
			this.get('notifications').loadNextPage();
		}
	},

	onMouseWheel(e) {
		const delta = -e.originalEvent.wheelDelta || e.originalEvent.detail,
			scrollTop = this.scrollTop;
		if ((delta < 0 && scrollTop === 0) || (delta > 0 && this.scrollHeight - this.clientHeight - scrollTop === 0)) {
			e.preventDefault();
		}
	},

	/**
	 * Has the user scrolled almost to the bottom?
	 * @private
	 */
	hasAlmostScrolledToTheBottom(element) {
		return element[0].scrollHeight - this.get('almostBottom') <= element.scrollTop() + element.innerHeight();
	}

});

