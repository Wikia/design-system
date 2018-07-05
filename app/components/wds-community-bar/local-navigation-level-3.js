import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
	classNames: ['wds-community-bar__level-3'],
	classNameBindings: ['isActive:wds-is-active'],

	isActive: computed('firstLevelIndex', 'firstLevelIndexSelected', 'secondLevelIndex', 'secondLevelIndexSelected', function () {
		return this.firstLevelIndex === this.firstLevelIndexSelected && this.secondLevelIndex === this.secondLevelIndexSelected;
	})
});
