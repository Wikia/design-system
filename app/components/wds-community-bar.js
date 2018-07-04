import Component from '@ember/component';
import { computed } from '@ember/object';
import track from '../utils/track';

const discussionsTitleKey = 'community-header-discuss';

export default Component.extend({
	classNames: ['wds-community-bar'],

	// filter out discussion link from navigation model
	navigation: computed('model', function () {
		return this.model.navigation.filter((navigationItem) => {
			return navigationItem.title.key !== discussionsTitleKey;
		});
	}),

	// discussions link is a separate item in community bar
	discussionsLink: computed('model', function () {
		const discussionsLink = this.model.navigation.filter((navigationItem) => {
			return navigationItem.title.key === discussionsTitleKey;
		});

		return discussionsLink[0];
	}),

	click(event) {
		if (this.track) {
			track(event, this.element, this.track, 'click', 'community-header');
		}
	},

	actions: {
		linkClicked(event) {
			const href = event.target.getAttribute('href');

			if (href === '#') {
				event.preventDefault();
			} else {
				this.linkClicked(href);
			}
		}
	}
});
