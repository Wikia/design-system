import {module, test} from 'qunit';
import {setupRenderingTest} from 'ember-qunit';
import {render, click} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import {capture} from 'ember-visual-test/test-support/helpers';


function getCaptureOptions() {
	return {
		selector: '.toggle-wrapper'
	};
}

module('Integration | Component | wds-toggle', function (hooks) {
	setupRenderingTest(hooks);

	test('simple toggle', async function (assert) {
		await render(hbs`<span class='toggle-wrapper'>{{wds-toggle}}</span>`);

		assert.equal(this.element.textContent.trim(), '');
		await capture(assert, 'wds-toggle-inline', getCaptureOptions());

		await render(hbs`<span class='toggle-wrapper'>{{#wds-toggle}}test{{/wds-toggle}}</span>`);

		assert.equal(this.element.textContent.trim(), 'test');

		await capture(assert, 'wds-toggle-block', getCaptureOptions());
	});

	test('on/off toggle', async function (assert) {
		await render(hbs`<span class='toggle-wrapper'>{{#wds-toggle}}test{{/wds-toggle}}</span>`);

		assert.notOk(this.element.querySelector('input').checked);

		await click(this.element.querySelector('label'));

		assert.ok(this.element.querySelector('input').checked);

		await render(hbs`<span class='toggle-wrapper'>{{#wds-toggle checked=true}}test{{/wds-toggle}}</span>`);

		await capture(assert, 'wds-toggle-checked', getCaptureOptions());
	});

	test('disabled state', async function (assert) {
		await render(hbs`<span class='toggle-wrapper'>{{#wds-toggle disabled=true}}test{{/wds-toggle}}</span>`);

		assert.notOk(this.element.querySelector('input').checked);

		await click(this.element.querySelector('label'));

		assert.notOk(this.element.querySelector('input').checked);

		await capture(assert, 'wds-toggle-disabled', getCaptureOptions());
	});
});
