import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed, set, observer } from '@ember/object';
import fetch from 'fetch';

const recircItemsCount = 50;
const thumbDimension = 60;

function createThumbnail(item, propName) {
	if (item && window.Vignette) {
		set(item, propName, window.Vignette.getThumbURL(item[propName], {
			mode: window.Vignette.mode.zoomCrop,
			height: thumbDimension,
			width: thumbDimension
		}));
	}

	return item;
}

export default Component.extend({
	sponsoredContent: service(),

	classNames: ['wds-content-recommendations'],
	tagName: 'div',
	displayedItemsCount: 10,
	componentDisplayed: false,
	sponsoredItem: computed('sponsoredContent.item', function () {
		return createThumbnail(this.sponsoredContent.item, 'thumbnailUrl');
	}),
	displayedItems: computed('model', 'displayedItemsCount', 'sponsoredItem', function () {
		return this.model ? this.model.slice(0, this.displayedItemsCount) : [];
	}),
	// eslint-disable-next-line ember/no-observers
	sponsoredItemObserver: observer('sponsoredItem', 'componentDisplayed', function () {
		if (this.sponsoredItem && this.componentDisplayed && this.track) {
			this.track({
				action: 'impression',
				category: 'recirculation',
				label: 'search::' + this.sponsoredItem.url,
			});
		}
	}),

	init() {
		this._super(...arguments);
		this.onScroll = this.onScroll.bind(this);
	},

	didInsertElement() {
		this.fetchData();
		this.sponsoredContent.fetchData();
		this.set('componentDisplayed', true);
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
					items ? items.filter(item => item.thumbnail)
							.map(item => createThumbnail(item, 'thumbnail'))
						: []
				);

				this.track && this.track({
					action: 'impression',
					category: 'recirculation',
					label: 'search'
				});
			});
	},
});
