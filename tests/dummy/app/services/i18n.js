import Service from '@ember/service';
import i18n from 'npm:i18next';
import fetch from 'fetch';
import ENV from '../config/environment';

export default Service.extend({
	i18nextInstance: null,
	rootURL: ENV.rootURL,

	initialize(language) {
		return fetch(`${this.rootURL}assets/i18n/${language}/design-system.json`)
			.then(data => data.json())
			.then(translations => {
				const i18nextInstance = i18n.createInstance().init({
					fallbackLng: 'en',
					lng: language,
					lowerCaseLng: true,
					defaultNS: 'main',
					interpolation: {
						escapeValue: false,
						prefix: '{',
						suffix: '}',
					},
					resources: {
						[language]: {
							'design-system': translations
						},
					},
				});

				this.set('i18nextInstance', i18nextInstance);
			});
	},

	t() {
		return this.i18nextInstance.t(...arguments);
	},
});
