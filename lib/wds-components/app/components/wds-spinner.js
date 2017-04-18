import Ember from 'ember';

export default Ember.Component.extend({
	classNameBindings: ['overlay:wds-spinner__overlay'],

	spinnerClasses: Ember.computed('isBlock', function () {
		return `wds-spinner ${this.get('isBlock') ? 'wds-spinner__block' : ''}`;
	}),

	strokeClasses: Ember.computed('isThemed', function () {
		return `wds-spinner__stroke ${this.get('isThemed') ? 'wds-spinner__stroke-theme-color' : ''}`;
	}),

	// 'isVisible' is set to false also when 'active' is undefined.
	// This way it is not needed to initialize it in components.
	isVisible: Ember.computed('active', function () {
		return Boolean(this.get('active'));
	}),

	active: false,
	overlay: true,
	isBlock: false,
	isThemed: true,
	radius: 30,
	strokeWidth: 6,

	fullRadius: Ember.computed('radius', function () {
		return this.get('radius') + (this.get('strokeWidth') / 2);
	}),

	fullDiameter: Ember.computed('radius', function () {
		return this.get('radius') * 2 + this.get('strokeWidth');
	}),

	strokeLength: Ember.computed('radius', function () {
		return 2 * Math.PI * this.get('radius');
	})
});
