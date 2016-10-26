import Ember from 'ember';

const {Component, computed} = Ember;

export default Component.extend({
	tagName: '',
	showAvatar: computed.equal('model.header.type', 'avatar'),
	additionalClassNames: computed('type', function () {
		return `wds-global-navigation__${this.get('type')}`;
	})
});
