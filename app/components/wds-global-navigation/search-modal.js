import Component from '@ember/component';
import { assert } from '@ember/debug';

export default Component.extend({

	tagName: '',

	init() {
		this._super(...arguments);

		assert('Required property `model` is not set', this.model);
		assert('Required function `onSearchToggleClicked` is not set', this.onSearchToggleClicked);
		assert('Required function `openModal` is not set', this.openModal);
	},

});
