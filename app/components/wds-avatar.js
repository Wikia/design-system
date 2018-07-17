import Component from '@ember/component';

export default Component.extend({
	attributeBindings: ['data-tracking-label'],
	classNames: 'wds-avatar',
	src: null,
	alt: null,
	link: null,
	badge: null,
});
