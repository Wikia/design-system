import Component from '@ember/component';
import { oneWay } from '@ember/object/computed';

import track from '../utils/wds-track';

export default Component.extend({
	isWikiaOrg: oneWay('model.is-wikia-org'),

	click(event) {
		track(event, this.element, this.track, 'click', 'footer');
	},

	track(/* label */) {
		// Override if you want to have tracking
	}
});
