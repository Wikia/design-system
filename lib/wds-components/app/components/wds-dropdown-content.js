import Ember from 'ember';

const {Component} = Ember;

export default Component.extend({
	classNames: ['wds-dropdown__content'],
	classNameBindings: ['dropdownRightAligned:wds-is-right-aligned', 'isDark:wds-is-dark']
});
