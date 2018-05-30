import Component from '@ember/component';

export default Component.extend({
	tagName: 'a',
	attributeBindings: ['model.href:href'],
	classNames: ['wds-global-navigation__link']
});
