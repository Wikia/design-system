import { module, skip } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module(
	'Integration | Component | community-bar/local-navigation-level-3',
	function(hooks) {
		setupRenderingTest(hooks);

		skip('it renders', async function() {
			await render(hbs`{{community-bar/local-navigation-level-3}}`);
		});
	},
);
