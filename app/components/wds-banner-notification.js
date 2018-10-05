import Component from '@ember/component';
import { computed } from '@ember/object';

const iconMap = {
	alert: 'error',
	warning: 'alert',
	success: 'checkmark-circle',
	message: 'flag'
};

export default Component.extend({
	classNames: 'wds-banner-notification',
	classNameBindings: ['typeClassName'],

	onClose() {},

	icon: computed('type', function () {
		return iconMap[this.type];
	}),

	typeClassName: computed('type', function () {
		return 'wds-' + this.type;
	})
});
