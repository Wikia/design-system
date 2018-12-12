import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | optional', function(hooks) {
	setupRenderingTest(hooks);

	// Replace this with your real tests.
	test('it renders', async function(assert) {
		assert.expect(1);

		this.set('onClick', function() {
			assert.ok(true);
		});

		await render(
			hbs`<div class="click-me" {{action (optional onClick)}}></div>`,
		);

		await click('.click-me');

		await render(
			hbs`<div class="click-me" {{action (optional empty)}}></div>`,
		);

		await click('.click-me');
	});
});
