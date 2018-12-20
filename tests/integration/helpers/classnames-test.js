import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | classes', function(hooks) {
	setupRenderingTest(hooks);

	test('works for simple case', async function(assert) {
		await render(hbs`{{classnames 'test'}}`);

		assert.equal(this.element.textContent.trim(), 'test');
	});

	test('can concatenate multiple values', async function(assert) {
		await render(hbs`{{classnames 'test' 'test1' 'test2'}}`);

		assert.equal(this.element.textContent.trim(), 'test test1 test2');
	});

	test('works with if/unless helpers', async function(assert) {
		await render(
			hbs`{{classnames (if true 'test') (unless true 'test1') (if false 'test2') (unless false 'test3')}}`,
		);

		assert.equal(this.element.textContent.trim(), 'test test3');
	});

	test('can be broken into multiple lines', async function(assert) {
		await render(
			hbs`{{classnames
				'test'
				'test1'
				'test2'
				'test3'
			}}`,
		);

		assert.equal(this.element.textContent.trim(), 'test test1 test2 test3');
	});
});
