import {notEmpty, empty} from '@ember/object/computed';
import Component from '@ember/component';
import EmberObject from '@ember/object';
import fetch from 'fetch';
import {run} from '@ember/runloop';
import wrapMeHelper from '../../helpers/wrap-me';
import {inject as service} from '@ember/service';

export default Component.extend({
	search: service(),

	query: '',
	searchRequestInProgress: false,
	isLoadingResultsSuggestions: false,
	searchIsActive: false,
	selectedSuggestionIndex: -1,
	hasSuggestions: notEmpty('suggestions'),
	isEmptyQuery: empty('query'),
	cachedResultsLimit: 100,
	debounceDuration: 250,

	actions: {
		openModal(modalType) {
			this.get('openModal')(modalType);
		},

		onSearchSuggestionChosen(suggestion) {
			this.onSearchSuggestionChosen(suggestion);
		},

		onQueryChanged() {
			this.setProperties({
				suggestions: [],
				selectedSuggestionIndex: -1
			});

			this.get('search').getSuggestions(this.get('query'));
		},

		onCloseSearchClick(event) {
			event.stopPropagation();
			this.closeSearch();
		},

		onFocusIn() {
			this.set('inputFocused', true);
		},

		selectItem(index) {
			this.set('selectedSuggestionIndex', index);
		}
	}
});
