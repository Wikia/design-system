import Ember from 'ember';

const {Component, computed} = Ember;

export default Component.extend({
	tagName: 'svg',
	classNames: ['wds-icon'],
	classNameBindings: ['sizeClassName'],
	attributeBindings: ['width', 'height'],

	width: 50,
	height: 50,

	sizeClassName: computed(function () {
		const size = this.get('size');

		return size ? `wds-icon-${size}` : '';
	}),
	iconName: computed(function () {
		const name = this.get('name'),
			size = this.get('size');

		return `wds-icons-${name}${size ? `-${size}` : ''}`;
	})
});
