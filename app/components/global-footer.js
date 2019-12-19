import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { oneWay } from '@ember/object/computed';
import { computed } from '@ember/object';

import track from '../utils/wds-track';

export default Component.extend({
	isWikiaOrg: oneWay('model.is-wikia-org'),
	geo: service(),

	country: oneWay('geo.country', function () {
		return this.geo.data.country;
	}),
	region: oneWay('geo.region', function () {
		return this.geo.data.region;
	}),
	data: computed('model', function () {
		const model = this.get('model');

		if (!(this.country === 'US' && this.region === 'CA')) {
			const communityLinks = this.get('model.community.links');

			if (communityLinks) {
				const filteredLinks = communityLinks.filter(
					link => link.title.key !== 'global-footer-community-usp-do-not-sell',
				) ;

				return Object.assign(
					{},
					model,
					{
						community: Object.assign(
							{},
							model.community,
							{ links: filteredLinks },
						),
					},
				);
			}
		}

		return model;
	}),

	click(event) {
		track(event, this.element, this.track, 'click', 'footer');
	},

	track(/* label */) {
		// Override if you want to have tracking
	}
});
