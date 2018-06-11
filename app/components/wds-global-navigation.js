import {empty} from '@ember/object/computed';
import Component from '@ember/component';

export default Component.extend({
	classNames: ['wds-global-navigation'],
	classNameBindings: [
		'searchIsActive:wds-search-is-active',
		'searchIsAlwaysVisible:wds-search-is-always-visible',
		'model.partner_slot:wds-has-partner-slot'
	],

	searchIsActive: false,

	searchIsAlwaysVisible: empty('model.fandom_overview'),

	track(/*label*/) {
		// Needs to be passed from client
	},

	searchSuggestionChosen(/*suggestion*/) {
		// Needs to be passed from client
	},

	goToSearchResults() {
		// Needs to be passed from client
	},

	click(event) {
		const elementToTrack = event.target.closest('[data-tracking-label]');

		if (elementToTrack) {
			this.track(elementToTrack.getAttribute('data-tracking-label'));
		}
	},

	actions: {
		activateSearch() {
			this.set('searchIsActive', true);
		},

		deactivateSearch() {
			this.set('searchIsActive', false);
		},

		onSearchQueryChanged(query) {
			return [
					{
						text: `${query} One`,
						uri: '#'
					},
					{
						text: `${query} Two`,
						uri: '#'
					},
					{
						text: `${query} Three`,
						uri: '#'
					}
				];
		},

		onSearchSuggestionChosen(suggestion) {
			this.searchSuggestionChosen(suggestion);
		},

		goToSearchResults(querystring) {
			this.goToSearchResults(querystring)
		}
	}
});
