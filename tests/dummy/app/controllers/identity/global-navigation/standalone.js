import Controller from '@ember/controller';

export default Controller.extend({
	track(context) {
		// eslint-disable-next-line no-console
		console.info('tracking', context)
	}
});
