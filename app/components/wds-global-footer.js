import Component from '@ember/component';
import track from '../utils/wds-track';

export default Component.extend({
	tagName: 'footer',
	classNames: 'wds-global-footer',

	click(event) {
		track(event, this.element, this.track, 'click', 'footer');
	},

	track(/* label */) {
		// Override if you want to have tracking
	}
});
