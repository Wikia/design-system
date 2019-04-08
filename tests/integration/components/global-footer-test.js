import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Service from '@ember/service';
import model from 'dummy/models/global-footer';

import { create } from 'ember-cli-page-object';
import GlobalFooterObject from '../../pages/components/global-footer';

const GlobalFooter = create(GlobalFooterObject);

module('Integration | Component | global-footer', function(hooks) {
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
		this.set('model', model['with-hubs']);
		await render(hbs`
			<GlobalFooter @model={{model}}/>
		`);

		assert.ok(GlobalFooter.header.logo.isPresent);
		assert.equal(
			GlobalFooter.main.fandom.overview.header,
			'design-system:global-footer-fandom-overview-header',
		);
		assert.equal(GlobalFooter.main.fandom.overview.header, 'design-system:global-footer-fandom-overview-header');
		assert.equal(GlobalFooter.main.fandom.overview.links.length, 4);

		assert.equal(GlobalFooter.main.fandom.follow.header, 'design-system:Follow Us');
		assert.equal(GlobalFooter.main.fandom.follow.links.length, 5);

		assert.equal(GlobalFooter.main.wikia.overview.header, 'design-system:Overview');
		assert.equal(GlobalFooter.main.wikia.overview.links.length, 4);

		assert.equal(GlobalFooter.main.wikia.community.header, 'design-system:Overview');
		assert.equal(GlobalFooter.main.wikia.community.links.length, 4);

		assert.equal(
			GlobalFooter.main.wikia.createWiki.button.text,
			'design-system:Start a wiki',
		);
		assert.equal(
			GlobalFooter.main.wikia.createWiki.button.href,
			'http://www.wikia.com/Special:CreateNewWiki',
		);
		assert.equal(
			GlobalFooter.main.wikia.createWiki.description,
			'design-system:Can\'t find a community you love? Create your own and start something epic.',
		);

		assert.equal(GlobalFooter.main.wikia.apps.description, 'design-system:Take your favorite fandoms with you and never miss a beat.');
		assert.equal(GlobalFooter.main.wikia.apps.links.length, 2);

		assert.equal(GlobalFooter.main.wikia.advertise.header, 'design-system:Advertise');
		assert.equal(GlobalFooter.main.wikia.advertise.links.length, 2);

		assert.equal(
			GlobalFooter.footer.text,
			'design-system:global-footer-licensing-and-vertical-description',
		);
	});

	test('triggers track function', async function(assert) {
		this.setProperties({
			model: model['with-hubs'],
			track() {
				assert.ok(true);
			},
		});

		await render(hbs`
			<GlobalFooter @model={{model}} @track={{track}}/>
		`);

		await GlobalFooter.main.fandom.follow.links[0].click();

		//Does nothing when no track is passed
		await render(hbs`
			<GlobalFooter @model={{model}}/>
		`);

		await GlobalFooter.main.fandom.follow.links[0].click();
	});
});
