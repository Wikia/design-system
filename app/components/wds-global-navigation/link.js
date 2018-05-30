import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({
	computedComponentName: computed('model.type', function () {
		return this.get('model.type') === 'link-authentication' ?
			   'wds-global-navigation/link-authentication' : 'wds-global-navigation/link-dropdown';
	})
});
