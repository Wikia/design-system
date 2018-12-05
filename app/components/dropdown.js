import Component from '@ember/component';
import { or } from '@ember/object/computed';

const isTouchDevice = ('ontouchstart' in window);

export default Component.extend({
	classNameBindings: [
		'isActive:wds-is-active',
		'hasShadow:wds-has-shadow',
		'noChevron:wds-no-chevron',
		'hasDarkShadow:wds-has-dark-shadow',
		'isLevel2:wds-dropdown-level-2:wds-dropdown',
		'isTouchDevice:wds-is-touch-device',
	],

	isClicked: false,
	isLevel2: false,
	isTouchDevice: isTouchDevice,

	isActive: or('dropdownExpanded', 'isClicked'),

	init() {
		this._super(...arguments);

		if (this.mouseEnter) {
			this.mouseEnter = this.mouseEnter.bind(this);
		}
		this.mouseLeave = this.mouseLeave.bind(this);
	},

	didInsertElement() {
		this._super(...arguments);

		if (this.mouseEnter) {
			this.element.addEventListener('mouseenter', this.mouseEnter);
		}

		this.element.addEventListener('mouseleave', this.mouseLeave);
	},

	mouseLeave() {
		if (isTouchDevice) {
			this.set('isClicked', false);
		}
	},

	actions: {
		onClick(e) {
			if (isTouchDevice) {
				this.set('isClicked', !this.isClicked);
				e.preventDefault();
			}
		}
	}
});
