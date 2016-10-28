import Ember from 'ember';

const {Component} = Ember;

export default Component.extend({
	attributeBindings: ['disabled', 'href'],
	classNames: 'wds-button',
	tagName: 'button',

	disabled: false
});
