import Component from '@ember/component';
import { computed } from '@ember/object';
import fetch from 'fetch';

const recircItemsCount = 50;
const thumbDimension = 60;

export default Component.extend({
	classNames: ['wds-content-recommendations'],
	tagName: 'div',
	displayedItemsCount: 10,
	displayedItems: computed('model', 'displayedItemsCount', function () {
		return this.model ? this.model.slice(0, this.displayedItemsCount) : [];
	}),

	init() {
		this._super(...arguments);
		this.onScroll = this.onScroll.bind(this);
	},

	didInsertElement() {
		this.fetchData();
		this.element.addEventListener('scroll', this.onScroll);
	},

	willDestroyElement() {
		this.element.removeEventListener('scroll', this.onScroll);
	},

	onScroll() {
		if (this.element.scrollTop === (this.element.scrollHeight - this.element.offsetHeight)) {
			this.set('displayedItemsCount', this.displayedItemsCount + 10);
		}

		if (this.displayedItemsCount >= this.get('model.length')) {
			this.element.removeEventListener('scroll', this.onScroll);
		}
	},

	fetchData() {
		fetch(`${this.url}&limit=${recircItemsCount}`)
			.then(response => {
				if (response.ok) {
					return response.json();
				}
			})
			.then(items => {
				this.set('model',
					items
						.filter(item => item.thumbnail)
						.map(item => {
							if (window.Vignette) {
								item.thumbnail = window.Vignette.getThumbURL(item.thumbnail, {
									mode: window.Vignette.mode.zoomCrop,
									height: thumbDimension,
									width: thumbDimension
								});
							}

							return item;
						})
				);

				this.track && this.track({
					action: 'impression',
					category: 'recirculation',
					label: 'search'
				});
			});
	},
});
