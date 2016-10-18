import Ember from 'ember';

const {Component, computed} = Ember;

export default Component.extend({
	attributeBindings: ['model.href:href'],
	classNames: 'wds-global-footer__link',
	classNameBindings: ['brandClassName'],
	tagName: 'a',

	brandClassName: computed('model.brand', function () {
		const brand = this.get('model.brand');

		if (brand) {
			return `wds-is-${brand}`;
		}
	})
});
