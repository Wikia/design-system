import Component from '@ember/component';
import { inject as service } from '@ember/service';

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
	tagName: 'div',
	init() {
		this._super(...arguments);
		this.wdsLiftigniter.initLiftigniter({});
		this.fetchLiftIgniterData();
	},
    fetchLiftIgniterData() {
        const wdsLiftigniter = this.wdsLiftigniter;

	    wdsLiftigniter
            .getData(config)
            .then((data) => {
            	console.log(data)
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
