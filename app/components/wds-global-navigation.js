import {empty, equal} from '@ember/object/computed';
import {inject as service} from '@ember/service';
import { assert } from '@ember/debug';
import NotificationsUnreadCount from '../mixins/notifications-unread-count';

import Component from '@ember/component';
import track from '../utils/track';


export default Component.extend(NotificationsUnreadCount, {
	notifications: service(),
	wdsFetch: service(),

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
	currentModal: null,

	init() {
		this._super(...arguments);

		assert('Required property `model` is not set', this.model);
		assert('Required function `track` is not set', this.track);

		this.set('wdsFetch.servicesDomain', this.get('model.services_domain'));
	},

	click(event) {
		track(event, this.element, this.track, 'click', 'navigation');
	},

	actions: {
		onSearchToggleClicked() {
			this.setProperties({
				searchIsActive: true,
				currentModal: 'search'
			});
		},

		onSearchCloseClicked() {
			this.setProperties({
				searchIsActive: false,
				currentModal: null
			});
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
			this.onSearchSuggestionChosen(suggestion);
		},

		goToSearchResults(querystring) {
			this.goToSearchResults(querystring)
		},

		openModal(modalType) {
			this.set('currentModal', modalType);

			if (modalType === 'search') {
				this.set('searchIsActive', true);
			}
		},

		closeModal() {
			if (this.get('currentModal') === 'search') {
				this.set('searchIsActive', false);
			}

			this.set('currentModal', null);
		}
	}
});
