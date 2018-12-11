import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | community-header/local-navigation', function(
	hooks,
) {
	setupRenderingTest(hooks);

	test('it renders', async function(assert) {
		const model = [
			{
				tracking_label: 'test-label',
			},
		];
		this.set('model', model);
		await render(hbs`{{community-header/local-navigation model=model}}`);

		assert.dom('.wds-community-header__local-navigation').exists();
		assert
			.dom('.wds-tabs__tab')
			.hasAttribute(
				'data-tracking-label',
				model[0].tracking_label,
			);
	});
});
