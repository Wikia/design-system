import Component from '@ember/component';
import { computed } from '@ember/object';
import { run } from '@ember/runloop';
import { inject as service } from '@ember/service';

const recircItemsCount = 50;
const thumbDimension = 60;
const config = {
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
		return this.model ? this.model.slice(0, this.displayedItemsCount) : [];
	}),

	init() {
		this._super(...arguments);
		this.onScroll = this.onScroll.bind(this);
	},

	didInsertElement() {
		this.wdsLiftigniter.initLiftigniter({});
		this.fetchLiftIgniterData();
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

	fetchLiftIgniterData() {
		const wdsLiftigniter = this.wdsLiftigniter;

		wdsLiftigniter
			.getData(config)
			.then(({ items }) => {
				this.set('model',
					items
						.filter(item => item.thumbnail)
						.slice(0, recircItemsCount)
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

				run.scheduleOnce('afterRender', () => {
					if (!this.isDestroyed) {
						wdsLiftigniter.setupTracking(
							this.element.querySelectorAll('.wds-content-recommendations__card'),
							config.widget,
							'LI'
						);
					}
				});
			});

		this.track && this.track({
			action: 'impression',
			category: 'recirculation',
			label: 'search'
		});
	},
});
