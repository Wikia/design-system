import Ember from 'ember';

export default Ember.Component.extend({
	classNames: 'wds-global-navigation',
	classNameBindings: ['searchIsActive:wds-search-is-active', 'searchIsAlwaysVisible:wds-search-is-always-visible'],

	searchIsActive: false,

	searchIsAlwaysVisible: Ember.computed.empty('model.fandom_overview'),

	actions: {
		activateSearch() {
			this.set('searchIsActive', true);
		},

		deactivateSearch() {
			this.set('searchIsActive', false);
		}
	}
});
