import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({
	tagName: '',
	linkClasses: computed('model.title.key', function () {
		const classMap = {
			'global-navigation-anon-sign-in': 'wds-button wds-is-full-width',
			'global-navigation-anon-register': 'wds-button wds-is-full-width wds-is-secondary',
			'global-navigation-user-sign-out': 'wds-global-navigation__dropdown-link'
		};

		return classMap[this.get('model.title.key')] || '';
	})
});
