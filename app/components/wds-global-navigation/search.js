import {notEmpty, empty} from '@ember/object/computed';
import Component from '@ember/component';
import {computed} from '@ember/object';
import translations from 'npm:design-system-i18n/i18n/en/design-system';

export default Component.extend({
	tagName: 'form',
	classNames: ['wds-global-navigation__search'],

	query: '',
	searchIsActive: false,
	selectedSuggestionIndex: -1,
	hasSuggestions: notEmpty('suggestions'),
	isEmptyQuery: empty('query'),

	init() {
		this._super(...arguments);

		this.suggestions = [];
	},

	searchPlaceholder: computed('searchIsActive', function () {
		if (this.get('searchIsActive')) {
			return translations[this.get('model.placeholder-active.key')];
		}

		return translations[this.get('model.placeholder-inactive.key')];
	}),

	actions: {
		onFocusSearch() {
			this.set('searchIsActive', true);
			this.get('activateSearch')();
		},

		closeSearch() {
			this.setProperties({
				query: '',
				searchIsActive: false
			});
			this.updateSuggestions();
			this.get('deactivateSearch')();
		},

		onQueryChanged() {
			this.updateSuggestions(this.get('query'));
		},

		onKeyDown(value, event) {
			const keyCode = event.originalEvent ? event.originalEvent.keyCode : event.keyCode;

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
				event.currentTarget.blur();
				this.send('closeSearch');
			}

		}
	},

	updateSuggestions(query) {
		this.setProperties({
			suggestions: [],
			selectedSuggestionIndex: -1
		});

		if (query) {
			this.set('suggestions', [
				{
					text: 'One',
					uri: '#'
				},
				{
					text: 'Two',
					uri: '#'
				},
				{
					text: 'Three',
					uri: '#'
				}
			]);
		}
	}
});
