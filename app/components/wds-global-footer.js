import Component from '@ember/component';

export default Component.extend({
	tagName: 'footer',
	classNames: 'wds-global-footer',

	init() {
		this._super(...arguments);

		if(!this.track) {
			// throw new Error('Required `track` function for wds-global-footer component is not set');
		}
	},

	click(event) {
		const elementToTrack = event.target.closest('[data-tracking-label]');

		if (elementToTrack) {
			this.track(elementToTrack.getAttribute('data-tracking-label'));
		}
	},

	actions: {
		track() {

		}
	}
});
