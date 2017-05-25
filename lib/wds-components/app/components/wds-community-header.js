import Ember from 'ember';

const {Component} = Ember;

export default Component.extend({
	attributeBindings: ['style'],
	classNames: 'wds-community-header',
	tagName: 'header',
	style: Ember.computed('model', function () {
		return `background-image: url(${this.get('model')['background-image-url']});`
	}),


});
