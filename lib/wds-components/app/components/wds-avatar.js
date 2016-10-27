import Ember from 'ember';

const {Component} = Ember;

export default Component.extend({
	tagName: 'img',
	classNames: 'wds-avatar',
	attributeBindings: ['src', 'alt'],
	src: null,
	alt: null
});
