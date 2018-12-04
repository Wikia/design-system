import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | toggle', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Toggle />`);

    assert.dom('.wds-toggle__label').hasText('');

    // Template block usage:
    await render(hbs`
      <Toggle>
        template block text
      </Toggle>
    `);

    assert.dom('.wds-toggle__label').hasText('template block text');
  });
});
