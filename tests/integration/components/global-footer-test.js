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
			GlobalFooter.main.fandom_overview.header,
			'design-system:global-footer-fandom-overview-header',
		);
		assert.equal(GlobalFooter.main.fandom_overview.header, 'design-system:global-footer-fandom-overview-header');
		assert.equal(GlobalFooter.main.fandom_overview.links.length, 5);

		assert.equal(GlobalFooter.main.follow.header, 'design-system:global-footer-follow-us-header');
		assert.equal(GlobalFooter.main.follow.links.length, 5);

		assert.equal(GlobalFooter.main.company_overview.header, 'design-system:global-footer-company-overview-header');
		assert.equal(GlobalFooter.main.company_overview.links.length, 8);

		assert.equal(GlobalFooter.main.community.header, 'design-system:global-footer-community-header');
		assert.equal(GlobalFooter.main.community.links.length, 3);

		assert.equal(GlobalFooter.main.fandom_apps.description, 'design-system:global-footer-community-apps-description');

		assert.equal(GlobalFooter.main.fandom_stores.links.length, 2);

		assert.equal(GlobalFooter.main.ddb_stores.links.length, 2);

		assert.equal(GlobalFooter.main.advertise.header, 'design-system:global-footer-advertise-header');
		assert.equal(GlobalFooter.main.advertise.links.length, 2);

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

		await GlobalFooter.main.follow.links[0].click();

		//Does nothing when no track is passed
		await render(hbs`
			<GlobalFooter @model={{model}}/>
		`);

		await GlobalFooter.main.follow.links[0].click();
	});
});
