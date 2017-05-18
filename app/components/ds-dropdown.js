import Ember from 'ember';

import components from 'npm:shared-js-hack/build/components.umd.js';

const {Component, run} = Ember;

export default Component.extend({
	didInsertElement() {
		const $element = this.$().get(0);

		run.schedule('afterRender', () => {
			components.dropdown.init($element);
		})
	}
});
