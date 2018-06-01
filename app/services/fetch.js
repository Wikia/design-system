import Service from '@ember/service';
import fetch from "fetch";

export default Service.extend({

	// todo pass from API
	servicesHost: 'https://services.wikia.com',

	fetch(path, options) {
		return fetch(`${this.get('servicesHost')}/${path}`, options).then((response) => {
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
