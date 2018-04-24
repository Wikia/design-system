import Component from '@ember/component';

export default Component.extend({
	attributeBindings: ['disabled', 'href'],
	classNames: 'wds-button',
	tagName: 'button',

	disabled: false
});
