import Component from '@ember/component';
import { alias } from '@ember/object/computed';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

export default Component.extend({
	fastboot: service(),
	router: service(),

	attributeBindings: ['id'],
	id: alias('model.title.key'),

	redirectUrl: computed('fastboot.isFastBoot', 'router.currentURL', function() {
		if (this.get('fastboot.isFastBoot')) {
			return `${this.get('fastboot.request.protocol')}//${this.get('fastboot.request.host')}${this.get('fastboot.request.path')}`;
		} else {
			return window.location.href;
		}
	}),
});
