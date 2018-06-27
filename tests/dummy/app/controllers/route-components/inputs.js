import Controller from '@ember/controller';

export default Controller.extend({
	initialValue: 'initial value',

	actions: {
		input() {
			// eslint-disable-next-line no-console
			console.log('input');
		},

		focusOut() {
			// eslint-disable-next-line no-console
			console.log('focusOut');
		},

		focusIn() {
			// eslint-disable-next-line no-console
			console.log('focusIn');
		}
	}
});
