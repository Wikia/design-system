import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import Service from '@ember/service';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const modelStub = {
	"main-navigation": [
		{
			"type": "link-text",
			"title": {
				"type": "translatable-text",
				"key": "global-navigation-fandom-overview-link-vertical-games"
			},
			"href": "//fandom.wikia.com/topics/games",
			"tracking-label": "link.games"
		},
		{
			"type": "link-text",
			"title": {
				"type": "translatable-text",
				"key": "global-navigation-fandom-overview-link-vertical-movies"
			},
			"href": "//fandom.wikia.com/topics/movies",
			"tracking-label": "link.movies"
		},
		{
			"type": "link-text",
			"title": {
				"type": "translatable-text",
				"key": "global-navigation-fandom-overview-link-vertical-tv"
			},
			"href": "//fandom.wikia.com/topics/tv",
			"tracking-label": "link.tv"
		},
		{
			"type": "link-text",
			"title": {
				"type": "translatable-text",
				"key": "global-navigation-fandom-overview-link-video"
			},
			"href": "//fandom.wikia.com/video",
			"tracking-label": "link.video"
		},
		{
			"type": "link-group",
			"title": {
				"type": "translatable-text",
				"key": "global-navigation-wikis-header"
			},
			"tracking-label": "link.wikis",
			"items": [
				{
					"type": "link-text",
					"title": {
						"type": "translatable-text",
						"key": "global-navigation-wikis-explore"
					},
					"href": "//fandom.wikia.com/explore",
					"tracking-label": "link.explore"
				},
				{
					"type": "link-text",
					"title": {
						"type": "translatable-text",
						"key": "global-navigation-wikis-community-central"
					},
					"href": "//community.jakubjt.wikia-dev.pl/wiki/Community_Central",
					"tracking-label": "link.community-central"
				},
				{
					"type": "link-text",
					"title": {
						"type": "translatable-text",
						"key": "global-navigation-wikis-fandom-university"
					},
					"href": "//community.jakubjt.wikia-dev.pl/wiki/Fandom_University",
					"tracking-label": "link.fandom-university"
				},
				{
					"type": "link-button",
					"title": {
						"type": "translatable-text",
						"key": "global-navigation-create-wiki-link-start-wikia"
					},
					"href": "//www.jakubjt.wikia-dev.pl/Special:CreateNewWiki",
					"tracking-label": "link.start-a-wiki"
				}
			]
		}
	]
};

module('Integration | Component | wds-global-navigation/main-navigation', function (hooks) {
	setupRenderingTest(hooks);

	hooks.beforeEach(function () {
		this.set('model', modelStub);
		this.owner.register('service:i18n', Service.extend({
			t() {
				return 'some string';
			}
		}));
	});

	test('it renders', async function (assert) {
		await render(hbs`{{global-navigation/main-navigation model=model.main-navigation}}`);

		assert.dom('.wds-global-navigation__links').exists('should render component');
		assert.dom('.wds-global-navigation__link').exists({ count: 5 }, 'should render 5 links');
		assert.dom('.wds-global-navigation__link-button').exists('should render a button');
	});
});
