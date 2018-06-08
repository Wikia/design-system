import Controller from '@ember/controller';

export default Controller.extend({
	track(label) {
		/* eslint-disable no-console */
		console.info('tracking', {label})
		/* eslint-enable no-console */
	}
});
