import Component from '@ember/component';
import { readOnly } from '@ember/object/computed';

export default Component.extend({
	tagName: 'a',
	classNames: ['wds-content-recommendations__card'],
	attributeBindings: ['href'],
	href: readOnly('model.url'),

	click(event) {
		const eventsToTrack = [
			{
				action: 'click',
				label: 'search'
			},
			{
				action: 'select',
				label: 'search::' + this.model.url
			}
		];

		const clickedItemSpecificEvent = {
			action: 'click'
		};

		if (event.target.classList.contains('wds-content-recommendations__card-thumbnail')) {
			clickedItemSpecificEvent.label = 'search-trending-thumbnail';
		} else {
			clickedItemSpecificEvent.label = 'search-trending-card';
		}

		this.track && eventsToTrack.forEach(({ action, label }) => {
			this.track({
				action,
				label,
				category: 'recirculation'
			});
		});
	}
});
