import Ember from 'ember';

const {Component, computed} = Ember;

export default Component.extend({
	tagName: 'a',
	classNames: ['wds-global-navigation__link'],
	classNameBindings: ['linkClassName'],

	linkClassName: computed('model.brand', function () {
		return `wds-is-${this.get('model.brand')}`;
	})
});
