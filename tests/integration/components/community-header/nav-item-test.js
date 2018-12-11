import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | community-header/nav-item', function(hooks) {
	setupRenderingTest(hooks);

	test('it renders', async function(assert) {
		this.set('item', {
			title: {
				type: 'test',
				value: 'Test Title',
			},
		});
		await render(hbs`{{community-header/nav-item item=item}}`);

		assert.dom('span').hasText('Test Title')
	});
});
