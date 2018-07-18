import Service from '@ember/service';
import { Promise } from 'rsvp';
import localStorageAdapter from '../utils/local-storage-connector';

export default Service.extend({
	dataPromise: null,

	initLiftigniter(adsContext) {
		const kxallsegs = localStorageAdapter.getItem('kxallsegs');
		let context = {};

		if (adsContext && adsContext.targeting) {
			const targeting = adsContext.targeting;

			context = {
				_wCategory: targeting.wikiCategory,
				_wName: targeting.wikiDbName,
				_wTop: targeting.wikiIsTop1000,
				_wikiLanguage: targeting.wikiLanguage,
				_wVert: targeting.wikiVertical,
				_pType: targeting.pageType,
				_pName: targeting.pageName
			};

			if (targeting.wikiCustomKeyValues) {
				targeting.wikiCustomKeyValues
					.split(';')
					.map((keyVal) => {
						return keyVal.split('=');
					})
					.forEach((parts) => {
						const key = `_${parts[0]}`;

						if (!context[key]) {
							context[key] = [parts[1]];
						} else {
							context[key].push(parts[1]);
						}
					});
			}
		}

		if (kxallsegs) {
			context._kruxTags = kxallsegs.split(',');
		}

		window.liftigniter('init', 'l9ehhrb6mtv75bp2', {
			config: {
				globalCtx: context,
			}
		});

		window.liftigniter('send', 'pageview');
		window.liftigniter('setRequestFields', [
			'rank',
			'thumbnail',
			'title',
			'url',
			'presented_by',
			'author'
		]);
	},

	getData(config) {
		if (!this.dataPromise) {
			this.dataPromise = new Promise((resolve, reject) => {
				const registerOptions = {
					max: config.max,
					widget: config.widget,
					callback: resolve
				};

				if (!window.liftigniter) {
					return reject(
						new Error('Liftigniter library not found'));
				}

				if (config.opts) {
					registerOptions.opts = config.opts;
				}

				// currently we display only one recirc component on a
				// page so calling 'fetch' with every invocation of this
				// method is fine. However, if there will be more than
				// one recirc component on a page, 'register' should be
				// called for every of them, and the fetch only once at
				// the end - the calls to liftigniter will be batched.
				window.liftigniter('register', registerOptions);
				window.liftigniter('fetch');
			});
		}

		return this.dataPromise;
	},

	setupTracking(elements, widgetName, source) {
		const options = {
			elements,
			name: widgetName,
			source
		};

		window.liftigniter('track', options);
	}
});
