import Component from '@ember/component';
import { computed } from '@ember/object';
import { or } from '@ember/object/computed';

import getViewportSize from '../utils/viewport-size';

const isTouchDevice = ('ontouchstart' in window);

export default Component.extend({
	classNameBindings: [
		'isActive:wds-is-active',
		'hasShadow:wds-has-shadow',
		'noChevron:wds-no-chevron',
		'hasDarkShadow:wds-has-dark-shadow',
		'isLevel2:wds-dropdown-level-2:wds-dropdown',
		'isTouchDevice:wds-is-touch-device',
		'isFlipped:wds-is-flipped',
	],

	isClicked: false,
	isLevel2: false,
	isFlipped: false,
	canFlip: false,
	isTouchDevice: isTouchDevice,

	isActive: or('dropdownExpanded', 'isClicked'),

	contentElement: computed('element', function () {
		return this.element && this.element.querySelector('.wds-dropdown__content');
	}),

	init() {
		this._super(...arguments);

		this._mouseEnter = this._mouseEnter.bind(this);
		this._mouseLeave = this._mouseLeave.bind(this);
	},

	didInsertElement() {
		this._super(...arguments);

		this.element.addEventListener('mouseenter', this._mouseEnter);
		this.element.addEventListener('mouseleave', this._mouseLeave);
	},

	_mouseLeave() {
		if (this.isTouchDevice) {
			this.set('isClicked', false);
		}

		if (this.canFlip && !this.isLevel2) {
			this.set('isFlipped', false);
		}

		if (this.mouseLeave) {
			this.mouseLeave(...arguments);
		}
	},

	_mouseEnter() {
		if (this.canFlip && !this.isLevel2 && this.contentElement) {
			const contentElementBoundingRect = this.contentElement.getBoundingClientRect();

			if (contentElementBoundingRect.bottom > getViewportSize().height) {
				this.set('isFlipped', true);
			} else {
				this.set('isFlipped', false);
			}
		}

		if (this.mouseEnter) {
			this.mouseEnter(...arguments);
		}
	},

	actions: {
		onClick(e) {
			if (this.isTouchDevice) {
				this.set('isClicked', !this.isClicked);
				e.preventDefault();
			}
		}
	}
});
