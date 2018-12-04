import { bool } from '@ember/object/computed';
import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
	classNameBindings: ['overlay:wds-spinner__overlay'],

	spinnerClasses: computed('block', function () {
		return `wds-spinner ${this.block ? 'wds-spinner__block' : ''}`;
	}),

	isVisible: bool('active'),
	active: false,
	overlay: true,
	block: false,
	radius: 30,
	strokeWidth: 6,

	fullRadius: computed('radius', function () {
		return this.radius + (this.strokeWidth / 2);
	}),

	fullDiameter: computed('radius', function () {
		return this.radius * 2 + this.strokeWidth;
	}),

	strokeLength: computed('radius', function () {
		return 2 * Math.PI * this.radius;
	})
});
