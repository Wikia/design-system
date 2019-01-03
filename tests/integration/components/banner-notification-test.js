import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

import { create } from 'ember-cli-page-object';
import BannerNotificationObject from '../../pages/components/banner-notification';

const BannerNotification = create(BannerNotificationObject);

module('Integration | Component | banner-notification', function(hooks) {
	setupRenderingTest(hooks);

	test('it renders', async function(assert) {
		await render(hbs`
			<BannerNotification>
				TEST notification
			</BannerNotification>
		`);

		assert.equal(BannerNotification.text, 'TEST notification');
	});

	test('has correct classes and icons', async function(assert) {
		await render(hbs`
			<BannerNotification></BannerNotification>
		`);

		assert.ok(BannerNotification.isMessage, 'default type is message');
		assert.ok(BannerNotification.icon.isMessage, 'default icon is rendered');

		await render(hbs`
			<BannerNotification @type="success"></BannerNotification>
		`);

		assert.ok(BannerNotification.isSuccess, 'renders as a success');
		assert.ok(BannerNotification.icon.isSuccess, 'success icon is rendered');

		await render(hbs`
			<BannerNotification @type="alert"></BannerNotification>
		`);

		assert.ok(BannerNotification.isAlert, 'renders as an alert');
		assert.ok(BannerNotification.icon.isAlert, 'alert icon is rendered');

		await render(hbs`
			<BannerNotification @type="warning"></BannerNotification>
		`);

		assert.ok(BannerNotification.isWarning, 'renders as a warning');
		assert.ok(BannerNotification.icon.isWarning, 'warning icon is rendered');

	});

	test('trigger onClose', async function(assert) {
		this.set('onClose', function() {
			assert.ok(true);
		});
		await render(hbs`
			<BannerNotification @onClose={{action onClose}}></BannerNotification>
		`);

		assert.ok(BannerNotification.isPresent);
		await BannerNotification.close();
	});
});
