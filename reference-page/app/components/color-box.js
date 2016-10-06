import Ember from 'ember';

export default Ember.Component.extend({
	classNames: 'color-box',
	safeStyle: Ember.computed('hex', function() {
		return Ember.String.htmlSafe(`background-color: ${this.get('hex')}`);
	})
});
