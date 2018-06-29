import Controller from '@ember/controller';

export default Controller.extend({
	track(context) {
		// eslint-disable-next-line no-console
		console.info('tracking', context);
	},

	onSearchSuggestionChosen({title}) {
		// eslint-disable-next-line no-console
		console.info('Suggestion clicked', title);
	},

	goToSearchResults(query) {
		// eslint-disable-next-line no-console
		console.info('goToSearchResults triggered', query);
	}
});
