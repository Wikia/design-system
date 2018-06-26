import Service from '@ember/service';
import { assign } from '@ember/polyfills';
import fetch from 'fetch';

// FIXME get rid of wdsFetch service and use ember-fandom fetch service
export default Service.extend({

	servicesDomain: 'https://services.wikia.com/',

	fetch(path, requestOptions) {
		const options = assign({ credentials: 'include' }, requestOptions);

		return fetch(`${this.get('servicesDomain')}${path}`, options).then((response) => {
			if (response.ok) {
				return response.json();
			} else {
				// TODO error handling
			}
		});
	},

	fetchFromOnSiteNotifications(path, options) {
		return this.fetch(`on-site-notifications/${path}`, options);
	}

});
