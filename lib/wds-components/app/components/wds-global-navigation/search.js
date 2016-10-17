import Ember from 'ember';
import translations from 'npm:design-system-i18n/i18n/en/design-system';

const {Component, computed} = Ember;

export default Component.extend({
	tagName: 'form',
	classNames: ['wds-global-navigation__search'],

	query: '',
	searchIsActive: false,
	selectedSuggestionIndex: -1,
	suggestions: [],
	hasSuggestions: computed.notEmpty('suggestions'),
	isEmptyQuery: computed.empty('query'),

	searchPlaceholder: computed('searchIsActive', function () {
		if (this.get('searchIsActive')) {
			return translations[this.get('model.placeholder-active.key')];
		}

		return translations[this.get('model.placeholder-inactive.key')];
	}),

	actions: {
		focusSearch() {
			this.set('searchIsActive', true);
			this.sendAction('activateSearch');
		},

		closeSearch() {
			this.setProperties({
				query: '',
				searchIsActive: false
			});
			this.updateSuggestions();
			this.sendAction('deactivateSearch');
		},

		queryChanged(query) {
			this.set('query', query);
			this.updateSuggestions(query);
		},

		onKeyEscape() {
			$('.wds-global-navigation__search-input').blur();
			this.send('closeSearch');
		},

		onKeyDown() {
			if (this.get('selectedSuggestionIndex') < this.get('suggestions.length') - 1) {
				this.incrementProperty('selectedSuggestionIndex');
			}
		},

		onKeyUp() {
			if (this.get('suggestions.length') && this.get('selectedSuggestionIndex') > -1) {
				this.decrementProperty('selectedSuggestionIndex');
			}
		},
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
