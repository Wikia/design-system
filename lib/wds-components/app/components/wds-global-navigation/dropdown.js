import {equal} from '@ember/object/computed';
import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({
	tagName: '',
	showAvatar: equal('model.header.type', 'avatar'),
	additionalClassNames: computed('type', function () {
		return `wds-global-navigation__${this.get('type')}`;
	})
});
