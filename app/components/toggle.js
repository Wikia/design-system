import Component from '@ember/component';

export default Component.extend({
	tagName: '',

	checked: false,
	disabled: false,

	onChange() {},

	didInsertElement() {
		this.set('input', document.getElementById(this.id));
	},

	actions: {
		onChange() {
			this.onChange(this.input.checked)
		}
	}
});
