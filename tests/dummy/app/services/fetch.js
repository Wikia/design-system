import fetch from '@wikia/ember-fandom/services/fetch';

export default fetch.extend({
	init() {
		this.set('config', {
			servicesExternalHost: 'https://services.wikia.com'
		});
		this._super(...arguments);
	}
});
