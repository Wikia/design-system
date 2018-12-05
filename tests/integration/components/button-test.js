import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | button', function(hooks) {
	setupRenderingTest(hooks);

	test('it renders', async function(assert) {
		await render(hbs`
		<Button>
			template block text
		</Button>
		`);

		assert.dom('.wds-button').exists();
		assert.dom('.wds-button').hasText('template block text');
	});

	test('renders secondary button', async function(assert) {
		await render(hbs`
		<Button @secondary={{true}}>
			template block text
		</Button>
	`);

		assert.dom('.wds-button').hasClass('wds-is-secondary');
	});

	test('renders square button', async function(assert) {
		await render(hbs`
		<Button @square={{true}}>
			template block text
		</Button>
		`);

		assert.dom('.wds-button').hasClass('wds-is-square');
	});

	test('renders passed href', async function(assert) {
		await render(hbs`
		<Button href='http://fandom.com'>
			template block text
		</Button>
	`);

		assert.dom('.wds-button').hasAttribute('href', 'http://fandom.com');
	});

	test('supports any attribute', async function(assert) {
		await render(hbs`
		<Button data-test='test' role='submit'>
			template block text
		</Button>
		`);

		assert.dom('.wds-button').hasAttribute('data-test', 'test');
		assert.dom('.wds-button').hasAttribute('role', 'submit');
	});

	test('responds to click', async function(assert) {
		this.set('onClick', function() {
			assert.ok(true);
		});
		await render(hbs`
			<Button @onClick={{onClick}}>
				template block text
			</Button>
		`);

		await click('.wds-button');
	});
});
