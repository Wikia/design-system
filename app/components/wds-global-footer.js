import Component from '@ember/component';
import { assert } from '@ember/debug';
import track from '../utils/track';

export default Component.extend({
	tagName: 'footer',
	classNames: 'wds-global-footer',

	init() {
		this._super(...arguments);

		assert('Required `track` function for wds-global-footer component is not set', this.track);
	},

	click(event) {
		track(event, this.element, this.track);
	}

});
