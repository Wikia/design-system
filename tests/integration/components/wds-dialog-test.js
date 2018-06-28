import {click, render} from '@ember/test-helpers';
import {setupRenderingTest} from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import {module, test} from 'qunit';

module('Integration | Component | wds-dialog', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders and fires actions', async function(assert) {
	let okClicked = false;
	let cancelClicked = false;

	this.set('onOK', function () {
		okClicked = true;
	});

	this.set('onCancel', function () {
		cancelClicked = true;
	});

    await render(hbs`
      {{#wds-dialog title='test' onOK=(action onOK) onCancel=(action onCancel)}}
        template block text
      {{/wds-dialog}}
	`);

	assert.equal(this.element.querySelector('.wds-dialog__title').textContent.trim(), 'test');
	assert.equal(this.element.querySelector('.wds-dialog__content').textContent.trim(), 'template block text');


	await click('.wds-button:nth-child(1)');
	await click('.wds-button:nth-child(2)');

	assert.ok(okClicked, 'onOK should be fired')
	assert.ok(cancelClicked, 'onCancel should be fired')
  });

  test('it allows for customising action button texts', async function (assert) {
    await render(hbs`
      {{#wds-dialog okText='testOK' cancelText='testCancel'}}
        test
      {{/wds-dialog}}
	`);

	assert.equal(this.element.querySelector('.wds-button:nth-child(1)').textContent.trim(), 'testCancel');
	assert.equal(this.element.querySelector('.wds-button:nth-child(2)').textContent.trim(), 'testOK');
  });
});
