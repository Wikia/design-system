import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
	tagName: '',

	isSelected: computed('selected', 'value', function () {
		return this.value !== undefined && this.selected === this.value;
	}),

	onSelect() {},

	click() {
		this.onSelect(this);
	}
});
