import Ember from 'ember';

export default Ember.Component.extend({
	attributeBindings: ['disabled', 'href'],
	classNames: 'wds-button',
	tagName: 'button',

	disabled: false
});
