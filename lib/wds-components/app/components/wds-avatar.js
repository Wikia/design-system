import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'img',
	classNames: 'wds-avatar',
	attributeBindings: ['src', 'alt'],
	src: null,
	alt: null
});
