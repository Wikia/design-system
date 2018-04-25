import Component from '@ember/component';

export default Component.extend({
	tagName: 'ul',
	classNames: 'wds-tabs',
	
	onChange() {},

	actions: {
		onChange() {
			this.get('onChange')(...arguments);
		}
	}
});
