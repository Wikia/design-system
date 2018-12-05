import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | dropdown', function(hooks) {
	setupRenderingTest(hooks);

	test('it renders', async function(assert) {
		await render(hbs`
		<Dropdown as |dropdown|>
			<dropdown.toggle @text='test-lol' data-attr='test'/>
			<dropdown.content data-attr='test'>
				content!
			</dropdown.content>
		</Dropdown>
		`);

		assert.dom('.wds-dropdown__toggle').hasText('test-lol');
		assert.dom('.wds-dropdown__toggle').hasAttribute('data-attr', 'test');
		assert.dom('.wds-dropdown__toggle-chevron').exists();
		assert.dom('.wds-dropdown__content').hasText('content!');
		assert.dom('.wds-dropdown__content').hasAttribute('data-attr', 'test');
	});

	test('supports block in toggle', async function(assert) {
		await render(hbs`
		<Dropdown as |dropdown|>
			<dropdown.toggle as |Chevron|>
				My Toggle <Chevron />
			</dropdown.toggle>
			<dropdown.content data-attr='test'>
				content!
			</dropdown.content>
		</Dropdown>
		`);

		assert.dom('.wds-dropdown__toggle').hasText('My Toggle');
		assert.dom('.wds-dropdown__toggle-chevron').exists();
	});
});
