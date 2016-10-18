import Ember from 'ember';

const {Component, computed} = Ember;

export default Component.extend({
	tagName: 'section',
	classNameBindings: ['parentClassName', 'brandClassName'],

	parentClassName: computed('parentName', function () {
		const parentName = this.get('parentName');

		if (parentName) {
			return `wds-global-footer__${parentName}-section`;
		}
	}),

	brandClassName: computed('name', function () {
		const name = this.get('name');

		if (name) {
			return `wds-is-${name}`;
		}
	}),
});
