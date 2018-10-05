import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
	tagName: '',

	firstLevelClasses: computed('firstLevelIndexSelected', function () {
		const classList = ['wds-community-bar__level-1'];

		if (this.firstLevelIndexSelected !== null) {
			classList.push('wds-is-hidden');
		}

		return classList.join(' ');
	}),
});
