import { equal } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import { assert } from '@ember/debug';
import { computed } from '@ember/object';
import { addQueryParams } from '@wikia/ember-fandom/utils/url';
import { run } from '@ember/runloop';

import Component from '@ember/component';
import track from '../utils/wds-track';

export default Component.extend({
	fetch: service(),
	fastboot: service(),
	router: service(),

	wdsOnSiteNotifications: service(),

	classNames: ['wds-global-navigation'],
	classNameBindings: [
		'searchIsActive:wds-search-is-active',
		'model.partner-slot:wds-has-partner-slot',
		'currentModal:wds-is-modal-opened',
		'communityBarIsActive:wds-is-community-bar-in'
	],

	searchIsActive: false,
	communityBarIsActive: false,

	isSearchModalOpen: equal('currentModal', 'search'),
	isUserModalOpen: equal('currentModal', 'user'),

	redirectUrl: computed('fastboot.isFastBoot', 'router.currentURL', function() {
		if (this.get('fastboot.isFastBoot')) {
			return `${this.get('fastboot.request.protocol')}//${this.get('fastboot.request.host')}${this.get('fastboot.request.path')}`;
		} else {
			return window.location.href;
		}
	}),

	signinUrl: computed('model.anon.signin', 'redirectUrl', function() {
		const params = {};

		params[this.get('model.anon.signin.param-name')] = this.get('redirectUrl');

		return addQueryParams(this.get('model.anon.signin.href'), params);
	}),

	currentModal: null,



	init() {
		this._super(...arguments);

		assert('Required property `model` is not set', this.model);

		this.scrollHandler = this.scrollHandler.bind(this);
	},

	didInsertElement() {
		this._super(...arguments);

		// TODO add throttling
		window.addEventListener('scroll', this.scrollHandler);
	},

	willDestroyElement() {
		window.removeEventListener('scroll', this.scrollHandler);
	},

	click(event) {
		track(event, this.element, this.track, 'click', 'navigation');
	},

	scrollHandler() {
		const globalNavigationHeight = 55;

		if (window.pageYOffset > globalNavigationHeight && this.communityBarIsActive === false) {
			run(() => {
				this.set('communityBarIsActive', true);
			});
		} else if (window.pageYOffset <= globalNavigationHeight && this.communityBarIsActive === true) {
			run(() => {
				this.set('communityBarIsActive', false);
			});
		}
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
		},

		track(event) {
			track(event, this.element, this.track, 'click', 'navigation');
		}
	},

	track(/* label */) {
		// Override if you want to have tracking
	}
});
