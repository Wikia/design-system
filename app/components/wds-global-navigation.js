import { empty, equal } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import { assert } from '@ember/debug';
import { run } from '@ember/runloop';

import Component from '@ember/component';
import track from '../utils/wds-track';

export default Component.extend({
	fetch: service(),
	wdsOnSiteNotifications: service(),

	classNames: ['wds-global-navigation'],
	classNameBindings: [
		'searchIsActive:wds-search-is-active',
		'searchIsAlwaysVisible:wds-search-is-always-visible',
		'model.partner-slot:wds-has-partner-slot',
		'currentModal:wds-is-modal-opened',
		'communityBarIsActive:wds-is-community-bar-in'
	],

	searchIsActive: false,
	communityBarIsActive: false,

	searchIsAlwaysVisible: empty('model.fandom_overview'),

	isSearchModalOpen: equal('currentModal', 'search'),
	isUserModalOpen: equal('currentModal', 'user'),
	currentModal: null,



	init() {
		this._super(...arguments);

		assert('Required property `model` is not set', this.model);
	},

	didInsertElement() {
		this._super(...arguments);

		// TODO add throttling
		window.addEventListener('scroll', () => {
			if (window.pageYOffset > 55 && this.communityBarIsActive === false) {
				run(() => {
					this.set('communityBarIsActive', true);
				});
			} else if (window.pageYOffset <= 55 && this.communityBarIsActive === true) {
				run(() => {
					this.set('communityBarIsActive', false);
				});
			}
		});
	},

	click(event) {
		track(event, this.element, this.track, 'click', 'navigation');
	},

	openModal(modalType) {
		this.set('currentModal', modalType);
		document.body.classList.add('wds-no-scroll');

		if (modalType === 'search') {
			this.set('searchIsActive', true);
		}
	},

	closeModal() {
		if (this.get('currentModal') === 'search') {
			this.set('searchIsActive', false);
		}

		this.set('currentModal', null);
		document.body.classList.remove('wds-no-scroll');
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
			this.closeModal();
			this.onSearchSuggestionChosen(suggestion);
		},

		goToSearchResults(querystring) {
			this.closeModal();
			this.goToSearchResults(querystring)
		}
	},

	track(/* label */) {
		// Override if you want to have tracking
	}
});
