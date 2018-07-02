import Component from '@ember/component';
import track from '../utils/track';

export default Component.extend({
	tagName: 'footer',
	classNames: 'wds-global-footer',

	click(event) {
		track(event, this.element, this.track, 'click', 'footer');
	},

	track() {}
});
