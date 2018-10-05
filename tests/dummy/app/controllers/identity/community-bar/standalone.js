import Controller from '@ember/controller';

export default Controller.extend({
	track(label) {
		// eslint-disable-next-line no-console
		console.info('tracking', { label })
	},

	linkClicked(href) {
		// eslint-disable-next-line no-console
		console.info('linkClicked', { href })
	},

	onSearchSuggestionChosen({ title }) {
		// eslint-disable-next-line no-console
		console.info('Suggestion clicked', title);
	},

	goToSearchResults(query) {
		// eslint-disable-next-line no-console
		console.info('goToSearchResults triggered', query);
	}
});
