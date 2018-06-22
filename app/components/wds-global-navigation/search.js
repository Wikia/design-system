import {notEmpty, empty} from '@ember/object/computed';
import Component from '@ember/component';
import EmberObject from '@ember/object';
import fetch from 'fetch';
import {run} from '@ember/runloop';
import wrapMeHelper from '../../helpers/wrap-me';
import {inject as service} from '@ember/service';

export default Component.extend({
	tagName: 'form',
	classNames: ['wds-global-navigation__search-container'],

	attributeBindings: ['action'],
	classNameBindings: ['inputFocused:wds-search-is-focused'],

	logger: service(),
	i18n: service(),

	action: '/search',
	query: '',
	searchRequestInProgress: false,
	isLoadingResultsSuggestions: false,
	searchIsActive: false,
	selectedSuggestionIndex: -1,
	hasSuggestions: notEmpty('suggestions'),
	isEmptyQuery: empty('query'),
	cachedResultsLimit: 100,
	debounceDuration: 250,

	init() {
		this._super(...arguments);

		this.suggestions = [];

		/**
		 * A set (only keys used) of query strings that are currently being ajax'd so
		 * we know not to perform another request.
		 */
		this.requestsInProgress = {};

		// string[] which holds in order of insertion, the keys for the cached items
		this.cachedResultsQueue = [];

		// key: query string, value: Array<SearchSuggestionItem>
		this.cachedResults = {};
	},

	didInsertElement() {
		this._super(...arguments);
		this.set('inputField', this.element.querySelector('.wds-global-navigation__search-input'));
	},

	submit(event) {
		event.preventDefault();

		this.set('searchRequestInProgress', true);
		this.goToSearchResults(this.get('query'));
	},

	//ToDo move to in-repo addon while workign on on-site notifications
	normalizeToUnderscore(title = '') {
		return title
			.replace(/\s/g, '_')
			.replace(/_+/g, '_');
	},

	//ToDo move to in-repo addon while workign on on-site notifications
	escapeRegex(text) {
		return text.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&');
	},

	/**
	 * @param {SearchSuggestionItem[]} [suggestions = []]
	 * @returns {void}
	 */
	setSearchSuggestionItems(suggestions = []) {
		if (this.get('isDestroyed')) {
			return;
		}

		const query = this.get('query'),
			highlightRegexp = new RegExp(`(${this.escapeRegex(query)})`, 'ig'),
			highlighted = wrapMeHelper.compute(['$1'], {
				className: 'wikia-search__suggestion-highlighted'
			});

		suggestions.forEach(
			/**
			 * @param {SearchSuggestionItem} suggestion
			 * @returns {void}
			 */
			(suggestion) => {
				suggestion.setProperties({
					uri: encodeURIComponent(this.normalizeToUnderscore(suggestion.title)),
					text: suggestion.title.replace(highlightRegexp, highlighted)
				});
			}
		);

		this.setProperties({
			suggestions,
			isLoadingResultsSuggestions: false
		});
	},

	closeSearch() {
		this.setProperties({
			query: '',
			searchIsActive: false
		});
		this.set('suggestions', []);
		this.deactivateSearch();
	},

	actions: {
		enter() {
			const index = this.get('selectedSuggestionIndex');

			this.get('inputField').blur();

			if (this.get('selectedSuggestionIndex') !== -1) {
				this.onSearchSuggestionChosen(this.get('suggestions')[index]);
			}

			this.setSearchSuggestionItems();
		},

		onSearchSuggestionChosen(suggestion) {
			this.onSearchSuggestionChosen(suggestion);
		},

		openSearch() {
			this.set('searchIsActive', true);
			this.activateSearch();
			this.get('inputField').focus();
		},

		onQueryChanged() {
			this.setProperties({
				suggestions: [],
				selectedSuggestionIndex: -1
			});

			this.getSuggestions(this.get('query'));
		},

		onCloseSearchClick(event) {
			event.stopPropagation();
			this.closeSearch();
		},

		onFocusIn() {
			this.set('inputFocused', true);
		},

		onFocusOut() {
			if (!this.get('query')) {
				this.closeSearch();
			}
			this.set('inputFocused', false);

			run.scheduleOnce('afterRender', () => {
				this.set('selectedSuggestionIndex', -1);
			});
		},

		onKeyDown(value, event) {
			const keyCode = event.keyCode;

			// down arrow
			if (keyCode === 40) {
				if (this.get('selectedSuggestionIndex') < this.get('suggestions.length') - 1) {
					this.incrementProperty('selectedSuggestionIndex');
				}
			// up arrow
			} else if (keyCode === 38) {
				if (this.get('suggestions.length') && this.get('selectedSuggestionIndex') > -1) {
					this.decrementProperty('selectedSuggestionIndex');
				}
			// ESC key
			} else if (keyCode === 27) {
				this.closeSearch();
			}
		},

		selectItem(index) {
			this.set('selectedSuggestionIndex', index);
		}
	}
});
