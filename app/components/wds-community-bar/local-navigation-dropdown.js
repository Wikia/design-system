import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({
	classNames: ['wds-community-bar__navigation'],

	firstLevelIndexSelected: null,
	secondLevelIndexSelected: null,

	navigationClasses: computed('isNavigationActive', function () {
		if (this.isNavigationActive) {
			return 'wds-is-active';
		}

		return '';
	}),

	init() {
		this._super(...arguments);

		this.onDocumentClick = this.onDocumentClick.bind(this);
	},

	didInsertElement() {
		this._super(...arguments);

		document.addEventListener('click', this.onDocumentClick);
	},

	willDestroyElement() {
		this._super(...arguments);

		document.removeEventListener('click', this.onDocumentClick);
	},

	onDocumentClick(event) {
		if (!this.element.contains(event.target)) {
			this.toggleNavigation(false);
		}
	},

	toggleNavigation(forceValue) {
		let isNavigationActive = !this.isNavigationActive;

		if (typeof forceValue === 'boolean') {
			isNavigationActive = forceValue;
		}

		this.setProperties({
			isNavigationActive,
			firstLevelIndexSelected: null,
			secondLevelIndexSelected: null,
		});
	},

	actions: {
		toggleNavigation() {
			this.toggleNavigation();
		},

		onFirstLevelSelected(index, firstLevelItem, event) {
			if (firstLevelItem.items) {
				this.set('firstLevelIndexSelected', index);
			}
			this.linkClicked(event);
		},

		onSecondLevelSelected(index, secondLevelItem, event) {
			if (secondLevelItem.items) {
				this.set('secondLevelIndexSelected', index);
			}
			this.linkClicked(event);
		},

		resetSelected(propName) {
			this.set(propName, null);
		}
	}
});
