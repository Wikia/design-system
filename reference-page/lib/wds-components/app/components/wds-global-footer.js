import Ember from 'ember';

export default Ember.Component.extend({
	tagName: 'footer',
	classNames: 'wds-global-footer',

	didInsertElement() {
		console.log(this.get('model'));
	}
});
