import Service from '@ember/service';

export default Service.extend({
	error(name, data) {
		/* eslint no-console:0 */
		console.error(name, data);
		/* eslint no-console:2 */
	}
});
