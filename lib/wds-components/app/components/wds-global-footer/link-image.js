import Ember from 'ember';

export default Ember.Component.extend({
	attributeBindings: ['model.href:href'],
	classNames: 'wds-global-footer__link',
	tagName: 'a',
});
