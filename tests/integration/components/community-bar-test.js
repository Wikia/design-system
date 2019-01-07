import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import Service from '@ember/service';
import hbs from 'htmlbars-inline-precompile';

import communityHeaderModel from 'dummy/models/community-header';

import { create } from 'ember-cli-page-object';
import CommunityBarObject from '../../pages/components/community-bar';

const CommunityBar = create(CommunityBarObject);

module('Integration | Component | community-bar', function(hooks) {
	setupRenderingTest(hooks);

	hooks.beforeEach(function() {
		this.owner.register(
			'service:i18n',
			Service.extend({
				t(key) {
					return key;
				},
			}),
		);
	});

	test('it renders', async function(assert) {
		this.set('model', communityHeaderModel.anon);

		await render(hbs`
			<CommunityBar @model={{model}} />
		`);

		assert.ok(CommunityBar.isPresent);
		assert.equal(CommunityBar.sitename.text, 'Wookiepedia');
		assert.ok(CommunityBar.discussionLink.isPresent);
		assert.equal(CommunityBar.discussionLink.href, '/d/f');
		assert.ok(CommunityBar.navigation.isPresent);
	});

	test('user can navigate through levels', async function(assert) {
		this.setProperties({
			model: communityHeaderModel.anon,
			linkClicked() {},
		});
		await render(hbs`<CommunityBar @model={{model}} />`);

		await CommunityBar.navigation.open();

		await click('.wds-community-bar__level-1 a');

		assert.dom('.wds-community-bar__level-2.wds-is-active').exists();
		assert
			.dom('.wds-community-bar__navigation-back')
			.hasText('design-system:back');

		await click(
			'.wds-community-bar__level-2.wds-is-active ul li:last-child a',
		);

		assert.dom('.wds-community-bar__level-3.wds-is-active').exists();

		await click('.wds-community-bar__level-3.wds-is-active li a');
	});

	test('user can go back', async function(assert) {
		this.setProperties({
			model: communityHeaderModel.anon,
			linkClicked() {},
		});

		await render(hbs`<CommunityBar @model={{model}} />`);

		await CommunityBar.navigation.open();
		await click('.wds-community-bar__level-1 a');
		await click('.wds-community-bar__navigation-back');
		assert.dom('.wds-community-bar__level-2.wds-is-active').doesNotExist();
	});

	test('onLinkClicked triggered', async function(assert) {
		assert.expect(2);

		this.setProperties({
			model: communityHeaderModel.anon,
			linkClicked(href, event) {
				assert.equal(href, 'http://fandom.com');
				assert.ok(event);

				event.preventDefault();
			},
		});

		await render(
			hbs`<CommunityBar @model={{model}} @onLinkClicked={{linkClicked}} />`,
		);

		await CommunityBar.navigation.open();
		await click('.wds-community-bar__level-1 li a');
		await click('.wds-community-bar__level-2.wds-is-active ul li a')
	});

	test('track triggered', async function(assert) {
		assert.expect(1);

		this.setProperties({
			model: communityHeaderModel.anon,
			track(data) {
				assert.deepEqual(data, {
					action: 'click',
					category: 'community-header',
					label: 'nav-expanded',
				});
			},
		});

		await render(hbs`<CommunityBar @model={{model}} @track={{track}} />`);

		await CommunityBar.navigation.open();
		await click('.wds-community-bar__level-1 li:nth-child(2) a');
	});
});
