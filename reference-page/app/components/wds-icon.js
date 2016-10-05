import Ember from 'ember';

const {Component, computed} = Ember;

export default Component.extend({
	iconClass: computed(function () {
		const size = this.get('size');

		return `wds-icon${size ? ` wds-icon-${size}` : ''}`;
	}),
	iconName: computed(function () {
		const name = this.get('name'),
			size = this.get('size');

		return `wds-icons-${name}${size ? `-${size}` : ''}`;
	})
});
