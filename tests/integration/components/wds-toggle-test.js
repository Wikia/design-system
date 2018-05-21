import {module, test} from 'qunit';
import {setupRenderingTest} from 'ember-qunit';
import {render, click} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import {capture} from 'ember-visual-test/test-support/helpers';


module('Integration | Component | wds-toggle', function (hooks) {
	setupRenderingTest(hooks);

	test('simple toggle', async function (assert) {
		await render(hbs`{{wds-toggle}}`);

		assert.equal(this.element.textContent.trim(), '');
		await capture(assert, 'wds-toggle-inline');

		await render(hbs`{{#wds-toggle}}test{{/wds-toggle}}`);

		assert.equal(this.element.textContent.trim(), 'test');

		await capture(assert, 'wds-toggle-block');
	});

	test('on/off toggle', async function (assert) {
		await render(hbs`{{#wds-toggle}}test{{/wds-toggle}}`);

		assert.notOk(this.element.querySelector('input').checked);

		await click(this.element.querySelector('label'));

		assert.ok(this.element.querySelector('input').checked);

		await render(hbs`{{#wds-toggle checked=true}}test{{/wds-toggle}}`);

		await capture(assert, 'wds-toggle-checked');
	});

	test('disabled state', async function (assert) {
		await render(hbs`{{#wds-toggle disabled=true}}test{{/wds-toggle}}`);

		assert.notOk(this.element.querySelector('input').checked);

		await click(this.element.querySelector('label'));

		assert.notOk(this.element.querySelector('input').checked);

		await capture(assert, 'wds-toggle-disabled');
	});
});
