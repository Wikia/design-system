import Ember from 'ember';

export default Ember.Component.extend({
	classNames: 'wds-global-navigation',
	classNameBindings: ['searchIsActive'],

	searchIsActive: false,

	actions: {
		activateSearch() {
			this.set('searchIsActive', true);
		},

		deactivateSearch() {
			this.set('searchIsActive', false);
		}
	}
});
