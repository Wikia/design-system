import Component from '@ember/component';
import {computed} from '@ember/object';
import {inject as service} from '@ember/service';

const recircItemsCount = 50,
	config = {
		// we load twice as many items as we want to display because we need to filter out those without thumbnail
		max: recircItemsCount * 2,
		widget: 'wikia-impactfooter',
		source: 'fandom',
		opts: {
			resultType: 'cross-domain',
			domainType: 'fandom.wikia.com'
		}
	};

export default Component.extend({
	wdsLiftigniter: service(),
	classNames: ['wds-content-recommendations'],
	tagName: 'div',
	displayedItemsCount: 10,
	displayedItems: computed('model', 'displayedItemsCount', function () {
		return this.model ? this.model.slice(0, this.get('displayedItemsCount')) : [];
	}),

	init() {
		this._super(...arguments);
		this.wdsLiftigniter.initLiftigniter({});
		this.fetchLiftIgniterData();
		this.onScroll = this.onScroll.bind(this);
	},

	didInsertElement() {
		this.searchModal = document.querySelector('.wds-search-modal');

		this.searchModal.addEventListener('scroll', this.onScroll);
	},

	willDestroyElement() {
		this.searchModal.removeEventListener('scroll', this.onScroll);
	},

	onScroll() {
		if (this.searchModal.scrollTop === (this.searchModal.scrollHeight - this.searchModal.offsetHeight)) {
			this.set('displayedItemsCount', this.get('displayedItemsCount') + 10);
		}
	},

	fetchLiftIgniterData() {
		const wdsLiftigniter = this.wdsLiftigniter;

		wdsLiftigniter
			.getData(config)
			.then((data) => {
				this.set('model', data.items.filter((item) => {
					return item.hasOwnProperty('thumbnail') && item.thumbnail;
				})
					.slice(0, recircItemsCount))
				//     .map((item) => {
				//         item.thumbnail = Thumbnailer.getThumbURL(item.thumbnail, {
				//             mode: Thumbnailer.mode.scaleToWidth,
				//             width: normalizeThumbWidth(window.innerWidth)
				//         });
				//
				//         return item;
			});

		// run.scheduleOnce('afterRender', () => {
		//     if (!this.isDestroyed) {
		//         liftigniter.setupTracking(
		//             this.element.querySelectorAll('.recirculation-prefooter__item'),
		//             config.widget,
		//             'LI'
		//         );
		//         this.get('listRendered').resolve();
		//     }
		// });

		// if (this.shouldShowPlista) {
		//     this.fetchPlista()
		//         .then(this.mapPlista)
		//         .then((item) => {
		//             if (item.thumbnail) {
		//                 let newItems = this.items;
		//
		//                 newItems.splice(1, 0, item);
		//                 newItems.pop();
		//                 this.set('items', newItems);
		//                 this.notifyPropertyChange('items');
		//             }
		//         })
		//         .catch((error) => {
		//             this.logger.info('Plista fetch failed', error);
		//         });
		// }
		// });

		// track({
		//           action: trackActions.impression,
		//           category: 'recirculation',
		//           label: 'footer'
		//       });
	},
});
