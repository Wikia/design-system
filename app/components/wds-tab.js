import Component from '@ember/component';

export default Component.extend({
	tagName: 'li',
	classNames: 'wds-tabs__tab',
	classNameBindings: ['selected:wds-is-current', 'disabled:wds-is-disabled'],

	onSelect() {},

	click() {
		this.get('onSelect')(this);
	}
});
