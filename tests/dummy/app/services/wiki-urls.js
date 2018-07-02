import wikiUrls from '@wikia/ember-fandom/services/wiki-urls';

export default wikiUrls.extend({
	init() {
		this.set('config', {
			baseDomain: 'wikia.com'
		});
		this._super(...arguments);
	}
});
