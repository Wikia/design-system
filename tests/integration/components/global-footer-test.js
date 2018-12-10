import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Service from '@ember/service';
import model from 'dummy/models/global-footer';

module('Integration | Component | global-footer', function(hooks) {
	setupRenderingTest(hooks);

	test('it renders', async function(assert) {
		this.owner.register(
			'service:i18n',
			Service.extend({
				t(key) {
					return key;
				},
			}),
		);

		this.set('model', model['with-hubs']);
		await render(hbs`
			<GlobalFooter @model={{model}}/>
		`);

		assert.dom('.wds-global-footer').exists();
		assert.dom('.wds-global-footer__header-logo').exists();
		assert
			.dom('.wds-global-footer__section-header')
			.hasText('design-system:global-footer-fandom-overview-header');
		assert.dom('.wds-global-footer__links-list li').exists({ count: 27 });
		assert
			.dom('.wds-global-footer__bottom-bar')
			.hasText(
				'design-system:global-footer-licensing-and-vertical-description',
			);
	});
});
