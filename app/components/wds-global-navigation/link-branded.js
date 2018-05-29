import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({
	tagName: 'a',
	classNames: ['wds-global-navigation__link'],

	classNameBindings: ['linkClassName'],
	attributeBindings: ['model.href:href'],

	linkClassName: computed('model.brand', function () {
		return `wds-is-${this.get('model.brand')}`;
	})
});
