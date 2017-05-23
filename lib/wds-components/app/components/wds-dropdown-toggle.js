import Ember from 'ember';

const {Component} = Ember;

export default Component.extend({
	classNameBindings: ['isLevel2:wds-dropdown-level-2__toggle:wds-dropdown__toggle'],
	attributeBindings: ['title', 'href']
});
