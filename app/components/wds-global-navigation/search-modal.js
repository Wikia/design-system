import Component from '@ember/component';
import { assert } from '@ember/debug';

export default Component.extend({

	init() {
		this._super(...arguments);

		assert('Required property `model` is not set', this.model);
		assert('Required function `onSearchToggleClicked` is not set', this.onSearchToggleClicked);
		assert('Required function `onSearchSuggestionChosen` is not set', this.onSearchSuggestionChosen);
		assert('Required function `goToSearchResults` is not set', this.goToSearchResults);
		assert('Required function `openModal` is not set', this.openModal);
	},

	actions: {
		onSearchCloseClicked() {}
	}
});
