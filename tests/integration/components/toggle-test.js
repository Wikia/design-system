import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | toggle', function(hooks) {
	setupRenderingTest(hooks);

	test('it renders', async function(assert) {
		await render(hbs`<Toggle @id="my-id"/>`);

		assert.dom('.wds-toggle__input').hasAttribute('id', 'my-id');
		assert.dom('.wds-toggle__input').hasAttribute('type', 'checkbox');
		assert.dom('.wds-toggle__label').hasText('');
		assert.dom('.wds-toggle__label').hasAttribute('for', 'my-id');

		await render(hbs`
			<Toggle>
				template block text
			</Toggle>
		`);

		assert.dom('.wds-toggle__label').hasText('template block text');
	});

	test('support any attribute', async function(assert) {
		await render(hbs`<Toggle data-test="test"/>`);

		assert.dom('.wds-toggle__input').hasAttribute('data-test', 'test');
	});

	test('responds to click', async function(assert) {
		this.set('onChange', function() {
			assert.ok(true);
		});
		await render(hbs`<Toggle @id="test-id"/>`);
		await click('.wds-toggle__label');

		assert.dom('.wds-toggle__input').isChecked();

		await render(hbs`<Toggle @id="test-id" @onChange={{onChange}}/>`);
		await click('.wds-toggle__label');

		assert.dom('.wds-toggle__input').isChecked();

		await click('.wds-toggle__label');

		assert.dom('.wds-toggle__input').isNotChecked();
	});

	test('supports passing initial value', async function(assert) {
		await render(hbs`<Toggle checked={{false}}/>`);

		assert.dom('.wds-toggle__input').isNotChecked();
	});
});
