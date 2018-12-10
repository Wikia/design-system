import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, click } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | banner-notification', function(hooks) {
	setupRenderingTest(hooks);

	test('it renders', async function(assert) {
		// Template block usage:
		await render(hbs`
		<BannerNotification>
			TEST notification
		</BannerNotification>
		`);

		assert.dom('.wds-banner-notification').hasText('TEST notification');
	});

	test('has correct classes', async function(assert) {
		await render(hbs`
		<BannerNotification>
			TEST notification
		</BannerNotification>
		`);

		assert.dom('.wds-banner-notification').hasClass('wds-message');

		await render(hbs`
		<BannerNotification @type="success">
			TEST notification
		</BannerNotification>
		`);

		assert.dom('.wds-banner-notification').hasClass('wds-success');

		await render(hbs`
		<BannerNotification @type="alert">
			TEST notification
		</BannerNotification>
		`);

		assert.dom('.wds-banner-notification').hasClass('wds-alert');
	});

	test('trigger onClose', async function(assert) {
		this.set('onClose', function() {
			assert.ok(true);
		});
		await render(hbs`
		<BannerNotification @onClose={{action onClose}}>
			TEST notification
		</BannerNotification>
		`);

		await click('.wds-banner-notification__close');
	});
});
