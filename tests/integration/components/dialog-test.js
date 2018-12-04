import { click, render } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';

module('Integration | Component | dialog', function(hooks) {
	setupRenderingTest(hooks);

	test('it renders and fires actions', async function(assert) {
	let okClicked = false;
	let cancelClicked = false;

	this.set('onOk', function () {
		okClicked = true;
	});

	this.set('onCancel', function () {
		cancelClicked = true;
	});

	await render(hbs`
		<Dialog @title='test' @onOk={{action onOk}} @onCancel={{action onCancel}}>
			template block text
		</Dialog>
	`);

	assert.dom('.wds-dialog__title').hasText('test');
	assert.dom('.wds-dialog__content').hasText('template block text');

	await click('.wds-button:nth-child(1)');
	await click('.wds-button:nth-child(2)');

	assert.ok(okClicked, 'onOk should be fired')
	assert.ok(cancelClicked, 'onCancel should be fired')
	});

	test('it allows for customising action button texts', async function (assert) {
		await render(hbs`
			<Dialog @okText='testOK' @cancelText='testCancel'>
				test
			</Dialog>
		`);

		assert.dom('.wds-button:nth-child(1)').hasText('testCancel');
		assert.dom('.wds-button:nth-child(2)').hasText('testOK');
	});
});
