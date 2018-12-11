import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Helper | wrap-me', function(hooks) {
	setupRenderingTest(hooks);

	test('it renders', async function(assert) {
		this.set('testValue', '1234');

		await render(
			hbs`{{{wrap-me testValue className='test-class'}}}`,
		);

		assert.dom('span.test-class').exists();
		assert.dom('.test-class').containsText('1234');
	});
});
