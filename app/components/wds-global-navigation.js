import { empty, equal } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import { assert } from '@ember/debug';
import { computed } from '@ember/object';

import Component from '@ember/component';
import track from '../utils/wds-track';

export default Component.extend({
	fetch: service(),
	fastboot: service(),

	wdsOnSiteNotifications: service(),

	classNames: ['wds-global-navigation'],
	classNameBindings: [
		'searchIsActive:wds-search-is-active',
		'model.partner-slot:wds-has-partner-slot',
		'currentModal:wds-is-modal-opened',
	],

	searchIsActive: false,

	isSearchModalOpen: equal('currentModal', 'search'),
	isUserModalOpen: equal('currentModal', 'user'),

	signinUrl: computed('model.anon.signin', 'fastboot.isFastBoot', function() {
		return `${this.get('model.anon.signin.href')}?${this.get('model.anon.signin.param-name')}=${this.getRedirectUrl()}`
	}),

	currentModal: null,

	init() {
		this._super(...arguments);

		assert('Required property `model` is not set', this.model);
	},

	getRedirectUrl() {
		if (this.get('fastboot.isFastBoot')) {
			return encodeURIComponent(`${this.get('fastboot.request.protocol')}//${this.get('fastboot.request.host')}${this.get('fastboot.request.path')}`);
		} else {
			return encodeURIComponent(window.location.href);
		}
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
