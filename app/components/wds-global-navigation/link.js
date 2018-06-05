import Component from '@ember/component';

export default Component.extend({
	tagName: 'a',
	attributeBindings: ['model.href:href'],
	classNameBindings:['standaloneLink:wds-global-navigation__link'],
	// classNames: ['wds-global-navigation__link']
});
