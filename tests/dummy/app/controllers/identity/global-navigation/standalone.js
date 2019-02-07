import Controller from '@ember/controller';

export default Controller.extend({
	track(context) {
		// eslint-disable-next-line no-console
		console.info('tracking', context);
	},

	onModalOpen(modalType) {
		// eslint-disable-next-line no-console
		console.info('Modal opened', modalType);
	},

	onSearchSuggestionChosen({ title }) {
		// eslint-disable-next-line no-console
		console.info('Suggestion clicked', title);
	},

	onSearchSuggestionsImpression(suggestions, searchId) {
		// eslint-disable-next-line no-console
		console.info('Suggestions impression', suggestions, 'with searchId', searchId);
	},

	goToSearchResults(query) {
		// eslint-disable-next-line no-console
		console.info('goToSearchResults triggered', query);
	}
});
