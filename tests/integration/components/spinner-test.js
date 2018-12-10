import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | spinner', function(hooks) {
	setupRenderingTest(hooks);

	test('it renders', async function(assert) {
		await render(hbs`
			<Spinner />
		`);

		assert.dom('.wds-spinner').exists();
	});

	test('allows to set options', async function(assert) {
		await render(hbs`
			<Spinner
				@active={{true}}
				@block={{true}}
				@overlay={{true}}
				@radius={{20}}
				@strokeWidth={{5}}
			/>
		`);

		assert.dom('div').hasClass('wds-spinner__overlay');
		assert.dom('.wds-spinner').hasClass('wds-spinner__block');
		assert.dom('.wds-spinner').hasAttribute('width', '45');
		assert.dom('.wds-spinner').hasAttribute('height', '45');
		assert.dom('.wds-spinner').hasAttribute('viewBox', '0 0 45 45');

		assert.dom('.wds-spinner__stroke').hasAttribute('r', '20');
		assert.dom('.wds-spinner__stroke').hasAttribute('stroke-width', '5');
		assert
			.dom('.wds-spinner__stroke')
			.hasAttribute('stroke-dasharray', '125.66370614359172');
		assert
			.dom('.wds-spinner__stroke')
			.hasAttribute('stroke-dashoffset', '125.66370614359172');
	});
});
