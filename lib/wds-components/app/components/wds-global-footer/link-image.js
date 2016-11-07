import Ember from 'ember';

const {Component} = Ember;

export default Component.extend({
	attributeBindings: ['model.href:href'],
	classNames: 'wds-global-footer__link',
	tagName: 'a',
});
