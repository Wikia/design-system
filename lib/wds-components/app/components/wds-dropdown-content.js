import Ember from 'ember';

const {Component} = Ember;

export default Component.extend({
	classNames: ['wds-dropdown__content'],
	classNameBindings: [
		'dropdownLeftAligned:wds-is-left-aligned',
		'dropdownRightAligned:wds-is-right-aligned',
		'isNotScrollable:wds-is-not-scrollable'
	]
});
