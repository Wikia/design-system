import Ember from 'ember';

const {Component} = Ember;

export default Component.extend({
	classNameBindings: ['dropdownExpanded:wds-is-active', 'hasShadow:wds-has-shadow', 'hasDarkShadow:wds-has-dark-shadow', 'isLevel2:wds-dropdown-level-2:wds-dropdown'],
	isLevel2: false,

	actions: {
		mouseEnter() {
			Ember.run.later(() => {
				this.set('dropdownExpanded', true);
			});
		},

		click(e) {
			if(!this.get('dropdownExpanded')) {
				this.set('dropdownExpanded', true);
				e.preventDefault();
			}
		},

		mouseLeave() {
			this.set('dropdownExpanded', false);
		}
	}
});
