import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | icon', function(hooks) {
	setupRenderingTest(hooks);

	test('it renders', async function(assert) {
		await render(hbs`<Icon @name="alert"/>`);

		assert.dom('.wds-icon use').hasAttribute('xlink:href', '#wds-icons-alert');
	});

	test('supports sizes', async function(assert) {
		await render(hbs`<Icon @name="alert" @size="small"/>`);

		assert.dom('.wds-icon use').hasAttribute('xlink:href', '#wds-icons-alert-small');
		assert.dom('.wds-icon').hasClass('wds-icon-small');

		await render(hbs`<Icon @name="alert" @size="small"/>`);

		assert.dom('.wds-icon use').hasAttribute('xlink:href', '#wds-icons-alert-small');
		assert.dom('.wds-icon').hasClass('wds-icon-small');

		await render(hbs`<Icon @name="alert" @size="tiny"/>`);

		assert.dom('.wds-icon use').hasAttribute('xlink:href', '#wds-icons-alert-tiny');
		assert.dom('.wds-icon').hasClass('wds-icon-tiny');
	});

	test('accepts any attribute', async function(assert) {
		await render(hbs`<Icon @name="alert" data-test="TEST"/>`);

		assert.dom('.wds-icon').hasAttribute('data-test', 'TEST');
	});

	test('triggers onClick event', async function(assert) {
		this.set('onClick', function () {
			assert.ok(true);
		})
		await render(hbs`<Icon @name="alert" @onClick={{onClick}}/>`);

		await click('.wds-icon');
	});

	test('special case for chevron', async function(assert) {
		await render(hbs`<Icon @name="menu-control" @chevron={{true}}/>`);

		assert.dom('.wds-icon use').hasAttribute('xlink:href', '#wds-icons-menu-control');
		assert.dom('.wds-icon').hasClass('wds-menu-chevron');
	});
});
