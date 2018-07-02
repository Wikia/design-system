import Component from '@ember/component';

const isTouchDevice = ('ontouchstart' in window);

export default Component.extend({
	classNameBindings: [
		'isClicked:wds-is-clicked',
		'dropdownExpanded:wds-is-active',
		'hasShadow:wds-has-shadow',
		'hasDarkShadow:wds-has-dark-shadow',
		'isLevel2:wds-dropdown-level-2:wds-dropdown'
	],
	isLevel2: false,

	init() {
		this._super(...arguments);

		if (this.mouseEnter) {
			this.mouseEnter = this.mouseEnter.bind(this);
		}
	},

	didInsertElement() {
		this._super(...arguments);

		if (this.mouseEnter) {
			this.element.addEventListener('mouseenter', this.mouseEnter);
		}
	},

	actions: {
		click(e) {
			if (isTouchDevice && !this.get('isClicked')) {
				this.set('isClicked', true);
				e.preventDefault();
			}
		},

		mouseLeave() {
			if (isTouchDevice) {
				this.set('isClicked', false);
			}
		}
	}
});
