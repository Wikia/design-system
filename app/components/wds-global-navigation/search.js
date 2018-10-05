import Component from '@ember/component';
import { assert } from '@ember/debug';
import EmberObject from '@ember/object';
import { empty, notEmpty } from '@ember/object/computed';
import { run, scheduleOnce } from '@ember/runloop';
import { inject as service } from '@ember/service';
import wrapMeHelper from '@wikia/ember-fandom/helpers/wrap-me';
import fetch from 'fetch';

export default Component.extend({
	tagName: 'form',
	classNames: ['wds-global-navigation__search-container'],

	attributeBindings: ['action'],
	classNameBindings: ['inputFocused:wds-search-is-focused'],

	logger: service(),
	i18n: service(),

	action: '/search',
	minimalQueryLength: 3,
	searchRequestInProgress: false,
	isLoadingResultsSuggestions: false,
	searchIsActive: false,
	selectedSuggestionIndex: -1,
	hasSuggestions: notEmpty('suggestions'),
	cachedResultsLimit: 100,
	debounceDuration: 250,
	shouldWaitForClickOnCloseSuggestion: false,
	inSearchModal: false,
	// this object is declared inline to enable sharing it's internals between all instances of search
	/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
	state: {
		query: ''
	},
	/* eslint-disable ember/avoid-leaking-state-in-ember-objects */
	isEmptyQuery: empty('state.query'),

	init() {
		this._super(...arguments);

		assert('Required property `model` is not set', this.model);
		assert('Required function `onSearchToggleClicked` is not set', this.onSearchToggleClicked);

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

		if (this.inSearchModal) {
			this.inputField.focus();
		}
	},

	click(event) {
		if (event.target.closest('.wds-global-navigation__search__suggestion')) {
			if (this.onSearchSuggestionChosen) {
				event.preventDefault();
				this.onSearchSuggestionChosen(this.suggestions[this.selectedSuggestionIndex]);
				this.closeSearch();
			}

			if (this.track) {
				this.track({
					action: 'click',
					category: 'navigation',
					label: 'search-open-suggestion-link'
				});
			}

			this.setProperties({
				shouldWaitForClickOnCloseSuggestion: false,
			});
			this.resetSearchState();

		}
	},

	submit(event) {
		if (this.track) {
			this.track({
				action: 'open',
				category: 'navigation',
				label: 'search-open-special-search'
			});
		}

		if (this.goToSearchResults) {
			event.preventDefault();
			this.goToSearchResults(this.get('state.query'));

			return;
		}

		this.set('searchRequestInProgress', true);

	},

	requestSuggestionsFromAPI() {
		const query = this.get('state.query');
		const uri = `${this.get('model.suggestions.url')}&query=${query}`;

		/**
		 * This was queued to run before the user has finished typing, and when they
		 * finished typing it may have turned out that they were just backspacing OR
		 * they finished typing something that was already in the cache, in which case
		 * we just ignore this request because the search fn already put the cached
		 * value into the window.
		 */
		if (!query || this.hasCachedResult(query) || this.requestInProgress(query) || this.isDestroyed) {
			return;
		}

		this.startedRequest(query);

		fetch(uri)
			.then((response) => {
				if (response.ok) {
					if (this.isDestroyed) {
						return;
					}

					return response.json().then((data) => {
						const suggestions = data.suggestions.map((suggestion) => {
							return EmberObject.create({
								title: suggestion
							});
						});

						/**
						 * If the user makes one request, request A, and then keeps typing to make
						 * request B, but request A takes a long time while request B returns quickly,
						 * then we don't want request A to dump its info into the window after B has
						 * already inserted the relevant information.
						 * Also, we don't want to show the suggestion results after a real search
						 * will be finished, what will happen if search request is still in progress.
						 */
						if (!this.searchRequestInProgress && query === this.get('state.query')) {
							this.setSearchSuggestionItems(suggestions);
						}

						this.cacheResult(query, suggestions);
					});
				} else if (response.status === 404) {
					// When we get a 404, it means there were no results
					if (query === this.query) {
						this.setSearchSuggestionItems();
					}

					this.cacheResult(query);
				} else {
					this.logger.error('Search suggestions error', response);
				}
			})
			.catch((reason) => this.logger.error('Search suggestions error', reason))
			.finally(() => {
				// We have a response, so we're no longer loading the results
				if (query === this.query && !this.isDestroyed) {
					this.set('isLoadingResultsSuggestions', false);
				}

				this.endedRequest(query);
			});
	},

	/**
	 * Wrapper for search suggestions performing, that also checks the cache
	 */
	getSuggestions(query) {
		if (this.isDestroyed) {
			return;
		}

		this.setProperties({
			suggestions: [],
			searchRequestInProgress: false
		});

		// If the query string is empty or shorter than the minimal length, return to leave the view blank
		if (!query || query.length < this.minimalQueryLength) {
			this.set('isLoadingResultsSuggestions', false);
		} else if (this.hasCachedResult(query)) {
			this.setSearchSuggestionItems(this.getCachedResult(query));
		} else {
			this.set('isLoadingResultsSuggestions', true);
			run.debounce(this, this.runSuggestionsRequest, this.debounceDuration);
		}
	},

	runSuggestionsRequest() {
		return this.requestSuggestionsFromAPI(this.get('state.query'));
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
		if (this.isDestroyed) {
			return;
		}

		const query = this.get('state.query'),
			highlightRegexp = new RegExp(`(${this.escapeRegex(query)})`, 'ig'),
			highlighted = wrapMeHelper.compute(['$1'], {
				className: 'wds-global-navigation__search-suggestion-highlight'
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

	/**
	 * Methods that modify requestsInProgress to record what requests are currently
	 * being executed so we don't do them more than once.
	 */

	/**
	 * records that we have submitted an ajax request for a query term
	 *
	 * @param {string} query - the query string that we submitted an ajax request for
	 * @returns {void}
	 */
	startedRequest(query) {
		this.requestsInProgress[query] = true;
	},

	/**
	 * returns whether or not there is a request in progress
	 *
	 * @param {string} query - query the query to check
	 * @returns {boolean}
	 */
	requestInProgress(query) {
		return this.requestsInProgress.hasOwnProperty(query);
	},

	/**
	 * records that we have finished a request
	 *
	 * @param {string} query - query the string we searched for that we're now done with
	 * @returns {void}
	 */
	endedRequest(query) {
		delete this.requestsInProgress[query];
	},

	/**
	 * Search result cache methods
	 */

	/**
	 * returns whether or not the number of cached results is equal to our limit on cached results
	 *
	 * @returns {boolean}
	 */
	needToEvict() {
		return this.cachedResultsQueue.length === this.cachedResultsLimit;
	},

	/**
	 * Evicts via FIFO from cachedResultsQueue cachedResults, based on what the first
	 * (and therefore least recently cached) query string is.
	 *
	 * @returns {void}
	 */
	evictCachedResult() {
		// query string to evict
		const toEvict = this.cachedResultsQueue.shift();

		delete this.cachedResults[toEvict];
	},

	/**
	 * caches the provided query/suggestion array pair
	 *
	 * @param {string} query - the query string that was used in the search API request
	 * @param {SearchSuggestionItem[]} [suggestions] - if not provided, then there were zero results
	 * @returns {void}
	 */
	cacheResult(query, suggestions) {
		if (this.needToEvict()) {
			this.evictCachedResult();
		}

		this.cachedResultsQueue.push(query);
		this.cachedResults[query] = suggestions || [];
	},

	/**
	 * Checks whether the result of the query has been cached
	 *
	 * @param {string} query
	 * @returns {boolean}
	 */
	hasCachedResult(query) {
		return this.cachedResults.hasOwnProperty(query);
	},

	/**
	 * returns the cached result or [] if there were no results
	 *
	 * @param {string} query - the query string to search the cache with
	 * @returns {*}
	 */
	getCachedResult(query) {
		return this.cachedResults[query];
	},

	closeSearch() {
		this.setProperties({
			'state.query': '',
			searchIsActive: false,
			inputFocused: false,
			suggestions: []
		});

		if (this.onSearchCloseClicked) {
			this.onSearchCloseClicked();
		}
	},

	resetSearchState() {
		this.set('inputFocused', false);

		run(() => {
			scheduleOnce('afterRender', this, () => {
				if (!this.isDestroyed ) {
					this.set('selectedSuggestionIndex', -1);
				}
			});
		});
	},

	actions: {
		openSearch() {
			this.set('searchIsActive', true);
			this.onSearchToggleClicked();
			this.inputField.focus();
		},

		onQueryChanged() {
			this.setProperties({
				suggestions: [],
				selectedSuggestionIndex: -1
			});

			this.getSuggestions(this.get('state.query'));
		},

		onCloseSearchClick(event) {
			event.stopPropagation();
			this.closeSearch();
		},


		onClearSearchClick() {
			this.closeSearch();
			this.inputField.focus();
		},

		onFocusIn() {
			this.set('inputFocused', true);
		},

		onFocusOut() {
			if (!this.get('state.query')) {
				this.closeSearch();
			}

			if (!this.shouldWaitForClickOnCloseSuggestion) {
				this.resetSearchState();
			}
		},

		onSuggestionMouseDown() {
			this.set('shouldWaitForClickOnCloseSuggestion', true);
		},

		onKeyDown(value, event) {
			const keyCode = event.keyCode;

			// down arrow
			if (keyCode === 40) {
				if (this.selectedSuggestionIndex < this.get('suggestions.length') - 1) {
					this.incrementProperty('selectedSuggestionIndex');
					event.preventDefault();
				}
			// up arrow
			} else if (keyCode === 38) {
				if (this.get('suggestions.length') && this.selectedSuggestionIndex > -1) {
					this.decrementProperty('selectedSuggestionIndex');
					event.preventDefault();
				}
			// ESC key
			} else if (keyCode === 27) {
				this.closeSearch();
			// ENTER key
			} else if (keyCode === 13) {
				if (this.selectedSuggestionIndex !== -1) {
					this.inputField.blur();
					this.onSearchSuggestionChosen(this.suggestions[this.selectedSuggestionIndex]);
				}

				this.setSearchSuggestionItems();
			}
		},

		selectItem(index) {
			this.set('selectedSuggestionIndex', index);
		}
	}
});
