import Component from '@ember/component';

export default Component.extend({
	tagName: '',

	cancelText: 'Cancel',
	okText: 'OK',

	onCancel() {},
	onOK() {},

	actions: {
		cancelBubble() {}
	}
});
