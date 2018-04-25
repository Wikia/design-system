import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({
	tagName: 'li',
	classNames: 'wds-tabs__tab',
	classNameBindings: ['isSelected:wds-is-current', 'disabled:wds-is-disabled'],

	isSelected: computed('selected', 'value', function () {
		return this.get('selected') === this.get('value');
	}),

	onSelect() {},

	click() {
		this.get('onSelect')(this);
	}
});
