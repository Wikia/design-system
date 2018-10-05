import Service from '@ember/service';

export default Service.extend({
	error(name, data) {
		/* eslint-disable no-console */
		console.error(name, data);
		/* eslint-enable no-console */
	},

	warn(name, data) {
		/* eslint-disable no-console */
		console.warn(name, data);
		/* eslint-enable no-console */
	}
});
