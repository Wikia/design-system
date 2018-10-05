import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
	classNames: 'wds-textarea',
	classNameBindings: [
		'hasError:wds-has-error',
		'hasLengthHint:wds-has-length-hint'
	],
	disabled: false,

	length: computed('value', function () {
		return this.value ? this.value.length : 0;
	}),

	lengthHint: computed('maxlength', 'length', function () {
		return this.maxlength - this.length;
	})

});
