import Component from '@ember/component';
import {computed} from '@ember/object';
import {htmlSafe} from '@ember/string';

export default Component.extend({
	attributeBindings: ['style'],
	classNames: 'wds-community-header',
	tagName: 'header',

	init() {
		this._super(...arguments);

		if(!this.track) {
			throw new Error('Required `track` function for wds-community-header component is not set');
		}
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
		const elementToTrack = event.target.closest('[data-tracking-label]');

		if (elementToTrack) {
			this.track(elementToTrack.getAttribute('data-tracking-label'));
		}
	},
});
