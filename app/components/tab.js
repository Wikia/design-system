import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
	tagName: 'li',
	attributeBindings: [
		'data-tracking-label',
	],
	classNames: 'wds-tabs__tab',
	classNameBindings: ['isSelected:wds-is-current', 'disabled:wds-is-disabled'],

	isSelected: computed('selected', 'value', function () {
		return this.value !== undefined && this.selected === this.value;
	}),

	click() {
		this.onSelect(this);
	}
});
