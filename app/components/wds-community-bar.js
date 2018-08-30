import Component from '@ember/component';
import track from '../utils/wds-track';

const discussionsTitleKey = 'community-header-discuss';

export default Component.extend({
	classNames: ['wds-community-bar'],

	init() {
		this._super(...arguments);

		const navigation = [];
		let discussionsLink;

		this.model.navigation.forEach((navigationItem) => {
			// filter out discussion link from navigation model
			if(navigationItem.title.key !== discussionsTitleKey) {
				navigation.push(navigationItem);
			} else {
				// discussions link is a separate item in community bar
				discussionsLink = navigationItem;
			}
		});

		this.setProperties({
			navigation,
			discussionsLink
		});
	},

	click(event) {
		if (this.track) {
			track(event, this.element, this.track, 'click', 'community-header');
		}
	},

	linkClicked(event) {
		const href = event.target.getAttribute('href');

		if (!href || href === '#') {
			event.preventDefault();
		} else {
			this.onLinkClicked(href, event);
		}
	}
});
