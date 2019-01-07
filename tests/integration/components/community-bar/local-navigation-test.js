import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

import communityHeaderModel from 'dummy/models/community-header';

module('Integration | Component | community-bar/local-navigation', function(
	hooks,
) {
	setupRenderingTest(hooks);

	test('it renders', async function(assert) {
		this.setProperties({
			model: communityHeaderModel.anon,
			firstLevelIndexSelected: null,
		});

		await render(hbs`{{community-bar/local-navigation
			model=model
			firstLevelIndexSelected=firstLevelIndexSelected
			secondLevelIndexSelected=secondLevelIndexSelected
		}}`);

		assert.dom('.wds-community-bar__level-1').hasNoClass('wds-is-hidden');

		this.setProperties({
			firstLevelIndexSelected: 1,
		});

		await render(hbs`{{community-bar/local-navigation
			model=model
			firstLevelIndexSelected=firstLevelIndexSelected
			secondLevelIndexSelected=secondLevelIndexSelected
		}}`);

		assert.dom('.wds-community-bar__level-1').hasClass('wds-is-hidden');

	});
});
