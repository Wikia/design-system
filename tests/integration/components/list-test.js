import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | list', function(hooks) {
	setupRenderingTest(hooks);

	test('it renders with various options', async function(assert) {
		await render(hbs`
			<List>
				<li>Test</li>
			</List>
		`);

		assert.dom('.wds-list').exists();
		assert.dom('.wds-list li').exists();

		await render(hbs`
			<List @big={{true}}>
				<li>Test</li>
			</List>
		`);

		assert.dom('.wds-list').hasClass('wds-has-big-items');

		await render(hbs`
			<List @bold={{true}}>
				<li>Test</li>
			</List>
		`);

		assert.dom('.wds-list').hasClass('wds-has-bolded-items')

		await render(hbs`
			<List @lines={{true}}>
				<li>Test</li>
			</List>
		`);

		assert.dom('.wds-list').hasClass('wds-has-lines-between')

		await render(hbs`
			<List @linked={{true}}>
				<li>Test</li>
			</List>
		`);

		assert.dom('.wds-list').hasClass('wds-is-linked')

		await render(hbs`
			<List @ellipsis={{true}}>
				<li>Test</li>
			</List>
		`);

		assert.dom('.wds-list').hasClass('wds-has-ellipsis');
	});

	test('allows setting custom classes', async function (assert) {
		await render(hbs`
			<List class="my-custom-class">
				<li>Test</li>
			</List>
		`);

		assert.dom('.my-custom-class').exists()
	});
});
