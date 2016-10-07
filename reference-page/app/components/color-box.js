import Ember from 'ember';

const {Component, computed, String: emberString} = Ember;

export default Component.extend({
	classNames: 'color-box',
	safeStyle: computed('hex', function() {
		return emberString.htmlSafe(`background-color: ${this.get('hex')}`);
	})
});
