import Component from '@ember/component';

export default Component.extend({
	tagName: '',

	cancelText: 'Cancel',
	okText: 'OK',

	actions: {
		/**
		 * This action is here just to prevent {{action onCancel 'curtain'}} being triggered
		 * when wds-dialog__wrapper or its content are clicked
		 */
		cancelBubble() {}
	}
});
