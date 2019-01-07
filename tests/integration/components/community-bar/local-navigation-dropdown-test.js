import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

import communityHeaderModel from 'dummy/models/community-header';

module(
	'Integration | Component | community-bar/local-navigation-dropdown',
	function(hooks) {
		setupRenderingTest(hooks);

		test('it renders', async function(assert) {
			this.setProperties({
				model: communityHeaderModel.anon,
				linkClicked() {},
			});
			await render(hbs`{{community-bar/local-navigation-dropdown
				model=navigation
				onLinkClicked=(action linkClicked)

			}}`);

			assert.dom('.wds-dropdown__toggle').exists();
			assert.dom('.wds-icon').exists({ count: 2 });
		});

		test('sets class when active', async function(assert) {
			this.setProperties({
				model: communityHeaderModel.anon,
				linkClicked() {},
			});
			await render(hbs`{{community-bar/local-navigation-dropdown
				model=navigation
				onLinkClicked=(action linkClicked)
				isNavigationActive=true

			}}`);

			assert.dom('.wds-dropdown.wds-is-active').exists();
		});

		test('closes on document click', async function(assert) {
			this.setProperties({
				model: communityHeaderModel.anon,
				linkClicked() {},
			});
			await render(hbs`{{community-bar/local-navigation-dropdown
				model=navigation
				onLinkClicked=(action linkClicked)
				isNavigationActive=true

			}}`);

			await click(document.documentElement);

			assert.dom('.wds-dropdown').hasNoClass('wds-is-active');
		});

		test('does not close when click inside nav', async function(assert) {
			this.setProperties({
				model: communityHeaderModel.anon,
				linkClicked() {},
			});
			await render(hbs`{{community-bar/local-navigation-dropdown
				model=navigation
				onLinkClicked=(action linkClicked)
				isNavigationActive=true

			}}`);

			await click('.wds-dropdown');

			assert.dom('.wds-dropdown').hasClass('wds-is-active');
		});
	},
);
