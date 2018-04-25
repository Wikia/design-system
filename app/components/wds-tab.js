import Component from '@ember/component';

export default Component.extend({
	tagName: 'li',
	classNames: 'wds-tabs__tab',
	classNameBindings: ['selected:wds-is-active'],

	onSelect() {},

	click() {
		this.get('onSelect')(this);
	}
});
