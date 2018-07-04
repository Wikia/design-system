import Component from '@ember/component';
import { computed } from '@ember/object';
import { htmlSafe } from '@ember/string';
import track from '../utils/wds-track';

export default Component.extend({
	attributeBindings: ['style'],
	classNames: 'wds-community-header',
	tagName: 'header',

	style: computed('model.background_image', function () {
		const backgroundImage = this.get('model.background_image');

		if (backgroundImage) {
			return htmlSafe(`background-image: url('${backgroundImage}');`);
		} else {
			return htmlSafe('');
		}
	}),

	click(event) {
		track(event, this.element, this.track, 'click', 'community-header');
	},

	track(/* label */) {
		// Override if you want to have tracking
	}
});
