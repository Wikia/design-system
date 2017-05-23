import Ember from 'ember';

const {Component} = Ember;

export default Component.extend({
	classNameBindings: [
		'dropdownLeftAligned:wds-is-left-aligned',
		'dropdownRightAligned:wds-is-right-aligned',
		'isNotScrollable:wds-is-not-scrollable',
		'isLevel2:wds-dropdown-level-2__content:wds-dropdown__content'
	]
});
