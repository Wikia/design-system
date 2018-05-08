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

		await capture(assert, 'toggle-basic-inline');

		// Template block usage:
		await render(hbs`
			{{#wds-toggle}}
				template block text
			{{/wds-toggle}}`
		);

		assert.equal(this.element.textContent.trim(), 'template block text');

		await capture(assert, 'toggle-basic-block');
	});

	test('on/off toggle', async function (assert) {
		await render(hbs`{{#wds-toggle}}text{{/wds-toggle}}`);

		assert.notOk(this.element.querySelector('input').checked);

		await click(this.element.querySelector('label'));

		assert.ok(this.element.querySelector('input').checked);

		await capture(assert, 'toggle-basic-checked');
	});

	test('disabled state', async function (assert) {
		await render(hbs`{{#wds-toggle disabled=true}}text{{/wds-toggle}}`);

		assert.notOk(this.element.querySelector('input').checked);

		await click(this.element.querySelector('label'));

		assert.notOk(this.element.querySelector('input').checked);

		await capture(assert, 'toggle-basic-disabled');
	});
});
