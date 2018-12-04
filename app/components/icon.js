import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
	tagName: '',

	init() {
		this._super(...arguments);

		/**
		 * Some icon names are coming from DS API where icon name is returned as
		 * e.g. name-tiny
		 * Let's remove it from name so we can still use
		 * <Icon @name={{nameFromDesignSystemAPI}} @size="tiny" /> and make sure it still works
		 */
		this.name = this.name
			.replace(/(-tiny|-small)$/, '')
			.replace('wds-icons-', '');
	},

	sizeClassName: computed('size', function () {
		return this.size ? `wds-icon-${this.size}` : '';
	}),

	iconName: computed('name', 'size', function () {
		return `wds-icons-${this.name}${this.size ? `-${this.size}` : ''}`;
	})
});
