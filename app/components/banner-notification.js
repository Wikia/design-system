import Component from '@ember/component';
import { computed } from '@ember/object';

const iconMap = {
	alert: 'alert',
	warning: 'alert',
	success: 'checkmark',
	message: 'flag'
};

export default Component.extend({
	classNames: 'wds-banner-notification',
	classNameBindings: ['typeClassName'],

	type: 'message',

	icon: computed('type', function () {
		return iconMap[this.type];
	}),

	typeClassName: computed('type', function () {
		return 'wds-' + this.type;
	})
});
