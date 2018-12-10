/* eslint no-console:0 */
import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		onOk(dialogToggleName) {
			console.log('onOK')
			this.set(dialogToggleName, false);
		},
		onCancel(dialogToggleName) {
			console.log('onCancel')
			this.set(dialogToggleName, false);
		}
	}
});
