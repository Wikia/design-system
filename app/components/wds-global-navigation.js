import {empty, equal} from '@ember/object/computed';
import {inject as service} from '@ember/service';

import Component from '@ember/component';
import track from '../utils/track';

export default Component.extend({
	wdsFetch: service(),

	classNames: ['wds-global-navigation'],
	classNameBindings: [
		'searchIsActive:wds-search-is-active',
		'searchIsAlwaysVisible:wds-search-is-always-visible',
		'model.partner_slot:wds-has-partner-slot',
		'currentModal:wds-is-modal-opened'
	],

	searchIsActive: false,

	searchIsAlwaysVisible: empty('model.fandom_overview'),

	isSearchModalOpen: equal('currentModal', 'search'),
	isUserModalOpen: equal('currentModal', 'user'),

	init() {
		this._super(...arguments);

		this.set('wdsFetch.servicesDomain', this.get('model.services_domain'));
	},

	click(event) {
		track(event, this.element, this.track);
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
		},

		closeModal() {
			this.set('currentModal', null);
		}
	}
});
