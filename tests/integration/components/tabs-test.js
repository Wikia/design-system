import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | tabs', function(hooks) {
	setupRenderingTest(hooks);

	test('it renders', async function(assert) {
		await render(hbs`
			<Tabs as |tabs|>
				<tabs.tab @value={{0}}>
					Tab Content 1
				</tabs.tab>
				<tabs.tab @value={{1}}>
					Tab Content 2
				</tabs.tab>
			</Tabs>
		`);

		assert.dom('.wds-tabs').exists();
		assert.dom('.wds-tabs__tab:first-child').hasClass('wds-is-current');
	});

	test('responds to click', async function(assert) {
		await render(hbs`
			<Tabs as |tabs|>
				<tabs.tab @value={{0}}>
					Tab Content 1
				</tabs.tab>
				<tabs.tab @value={{1}} class='click-me'>
					Tab Content 2
				</tabs.tab>
			</Tabs>
		`);

		assert.dom('.wds-tabs__tab:first-child').hasClass('wds-is-current');
		await click('.click-me');

		assert.dom('.wds-tabs__tab:first-child').hasNoClass('wds-is-current');
		assert.dom('.wds-tabs__tab:last-child').hasClass('wds-is-current');
	});
});
