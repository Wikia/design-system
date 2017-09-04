import Ember from 'ember';

const { Component, computed } = Ember;

export default Component.extend({
	classNames: 'wds-banner-notification',
	classNameBindings: ['typeClassName'],
	icon: computed('type', function () {
		const prefix = 'wds-icons-';
		switch (this.get('type')) {
			case 'alert':
				return `${prefix}error-small`;
			case 'warning':
				return `${prefix}alert-small`;
			case 'success':
				return `${prefix}checkmark-circle-small`;
			case 'message':
				return `${prefix}flag-small`;
		}
	}),
	typeClassName: computed('type', function () {
		return 'wds-' + this.get('type');
	})
});
