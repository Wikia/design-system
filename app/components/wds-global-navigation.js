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

	track(label) {
    // To be passed by client
	},

	click(event) {
		const elementToTrack = event.target.closest('[data-tracking-label]');

		if (elementToTrack) {
			this.get('track')(elementToTrack.getAttribute('data-tracking-label'));
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

		onSearchSuggestionChosen() {
			// TODO
		},

		goToSearchResults() {
			// TODO
		}
	}
});
