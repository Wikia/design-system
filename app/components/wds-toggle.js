import Component from '@ember/component';
import {computed} from '@ember/object';
import {guidFor} from '@ember/object/internals';

export default Component.extend({
	tagName: '',

	checked: false,
	disabled: false,

	input: null,
	id: computed(function() {
		return guidFor(this);
	}),

	onChange() {},

	didInsertElement() {
		this.set('input', document.getElementById(this.get('id')));
	},

	actions: {
		onChange() {
			this.get('onChange')(this.input.checked)
		}
	}
});
