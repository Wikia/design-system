import { module, skip } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module(
	'Integration | Component | global-navigation/content-recommendation-card',
	function(hooks) {
		setupRenderingTest(hooks);

		skip('it renders', async function() {
			await render(
				hbs`{{global-navigation/content-recommendation-card}}`,
			);
		});
	},
);
