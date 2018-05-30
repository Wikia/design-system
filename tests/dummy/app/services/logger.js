import Service from '@ember/service';

export default Service.extend({
	error(name, data) {
		console.error(name, data);
	}
});
