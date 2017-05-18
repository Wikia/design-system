import Ember from 'ember';

const {Component} = Ember;

export default Component.extend({
	classNames: ['wds-dropdown__content'],
	classNameBindings: ['dropdownRightAligned:wds-is-right-aligned', 'dropdownLeftAligned:wds-is-left-aligned']
});
