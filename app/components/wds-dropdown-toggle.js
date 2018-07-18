import Component from '@ember/component';

export default Component.extend({
	classNameBindings: ['isLevel2:wds-dropdown-level-2__toggle:wds-dropdown__toggle'],
	attributeBindings: ['title', 'href', 'data-tracking-label'],

	init() {
		this._super(...arguments);

		if (this.mouseLeave) {
			this.mouseLeave = this.mouseLeave.bind(this);
		}
	},

	didInsertElement() {
		this._super(...arguments);

		if (this.mouseLeave) {
			this.element.addEventListener('mouseleave', this.mouseLeave);
		}
	},
});
