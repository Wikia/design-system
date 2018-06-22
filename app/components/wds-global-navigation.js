import {empty, equal} from '@ember/object/computed';
import {inject as service} from '@ember/service';

import Component from '@ember/component';

export default Component.extend({
	fetch: service(),

	classNames: ['wds-global-navigation'],
	classNameBindings: [
		'searchIsActive:wds-search-is-active',
		'searchIsAlwaysVisible:wds-search-is-always-visible',
		'model.partner_slot:wds-has-partner-slot',
		'currentModal:wds-is-modal-opened',
	],

	searchIsActive: false,

	searchIsAlwaysVisible: empty('model.fandom_overview'),

	isSearchModalOpen: equal('currentModal', 'search'),
	isUserModalOpen: equal('currentModal', 'user'),

	init() {
		this._super(...arguments);

		this.set('fetch.servicesDomain', this.get('model.services_domain'));
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
		},

		openModal(modalType) {
			this.set('currentModal', modalType);

			if (modalType === 'search') {
				this.send('activateSearch');
			}
		},

		closeModal() {
			if (this.get('currentModal') === 'search') {
				this.send('deactivateSearch');
			}

			this.set('currentModal', null);
		}
	}
});
