import Component from '@ember/component';

export default Component.extend({
	tagName: 'img',
	classNames: 'wds-avatar',
	attributeBindings: ['src', 'alt'],
	src: null,
	alt: null
});
