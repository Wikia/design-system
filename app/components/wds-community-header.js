import Component from '@ember/component';
import {computed} from '@ember/object';
import {htmlSafe} from '@ember/string';
import { assert } from '@ember/debug';
import track from '../utils/track';

export default Component.extend({
	attributeBindings: ['style'],
	classNames: 'wds-community-header',
	tagName: 'header',

	init() {
		this._super(...arguments);

		assert('Required `track` function for wds-global-footer component is not set', this.track);
	},

	style: computed('model.background_image', function () {
		const backgroundImage = this.get('model.background_image');

		if (backgroundImage) {
			return htmlSafe(`background-image: url('${backgroundImage}');`);
		} else {
			return htmlSafe('');
		}
	}),

	click(event) {
		track(event, this.element, this.track);
	},
});
