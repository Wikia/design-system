import { later } from '@ember/runloop';
import Service from '@ember/service';

export default Service.extend({
	counter: 0,
	hideAfterMs: 10000,

	init() {
		this._super(...arguments);
		this.model = [];
	},

	addNotification(notification) {
		notification.id = this.incrementProperty('counter');
		this.model.pushObject(notification);

		if (!notification.disableAutoHide) {
			later(this, () => {
				this.model.removeObject(notification);
			}, this.hideAfterMs);
		}
	}
});
