import Component from '@ember/component';
import { computed } from '@ember/object';

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

	onDocumentClick({ target }) {
		if (!this.element.contains(target)) {
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

	onFirstLevelSelected(index, firstLevelItem, event) {
		if (firstLevelItem.items) {
			event.preventDefault();
			this.set('firstLevelIndexSelected', index);
		} else {
			this.toggleNavigation(false);
			this.onLinkClicked(event);
		}
	},

	onSecondLevelSelected(index, secondLevelItem, event) {
		if (secondLevelItem.items) {
			event.preventDefault();
			this.set('secondLevelIndexSelected', index);
		} else {
			this.toggleNavigation(false);
			this.onLinkClicked(event);
		}
	},

	onNavigationItemLinkClicked(event) {
		this.toggleNavigation(false);
		this.onLinkClicked(event);
	},

	resetSelected(propName) {
		this.set(propName, null);
	}
});
