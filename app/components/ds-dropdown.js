import Ember from 'ember';

import dropdown from 'npm:shared-js-hack/build/dropdown.umd.js';

const {Component, run} = Ember;

export default Component.extend({
	didInsertElement() {
		const $element = this.$().get(0);

		run.schedule('afterRender', () => {
			dropdown.default.init($element);
		})
	}
});
