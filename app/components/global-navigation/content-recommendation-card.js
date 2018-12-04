import Component from '@ember/component';
import { readOnly } from '@ember/object/computed';

export default Component.extend({
	tagName: 'a',
	classNames: ['wds-content-recommendations__card'],
	attributeBindings: ['href'],
	href: readOnly('model.url'),

	click(event) {
		let label;

		if (event.target.classList.contains('wds-content-recommendations__card-thumbnail')) {
			label = 'search-trending-thumbnail';
		} else {
			label = 'search-trending-card';
		}

		this.track && this.track({
			label,
			action: 'click',
			category: 'recirculation'
		});
	}
});
