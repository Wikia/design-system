import Ember from 'ember';

const {Component, computed} = Ember;

export default Component.extend({
	classNames: 'wds-global-navigation',
	classNameBindings: ['searchIsActive:wds-search-is-active', 'searchIsAlwaysVisible:wds-search-is-always-visible'],

	searchIsActive: false,

	searchIsAlwaysVisible: computed.empty('model.fandom_overview'),

	actions: {
		activateSearch() {
			this.set('searchIsActive', true);
		},

		deactivateSearch() {
			this.set('searchIsActive', false);
		}
	}
});
