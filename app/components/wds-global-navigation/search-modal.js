import {notEmpty, empty} from '@ember/object/computed';
import Component from '@ember/component';
import EmberObject from '@ember/object';
import fetch from 'fetch';
import {run} from '@ember/runloop';
import wrapMeHelper from '../../helpers/wrap-me';
import {inject as service} from '@ember/service';

export default Component.extend({
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

			this.getSuggestions(this.get('query'));
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
