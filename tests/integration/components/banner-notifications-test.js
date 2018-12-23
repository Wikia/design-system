import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, waitUntil } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

import { create } from 'ember-cli-page-object';
import BannerNotificationsObject from '../../pages/components/banner-notifications';

const BannerNotifications = create(BannerNotificationsObject);

module('Integration | Component | banner-notifications', function(hooks) {
	let service;

	setupRenderingTest(hooks);

	hooks.beforeEach(function() {
		service = this.owner.lookup('service:wds-banner-notifications');
		service.set('hideAfterMs', 100);
	});

	test('it shows notifications and hides them after timeout', async function(assert) {
		await render(hbs`<BannerNotifications />`);

		assert.ok(
			BannerNotifications.isPresent,
			'Banner Notifications is present',
		);

		const alertType = 'alert';
		const warningType = 'warning';
		const alertText = 'This is an alert';
		const warningText = 'This is a warning';
		service.addNotification({ type: alertType, text: alertText });
		service.addNotification({ type: warningType, text: warningText });

		await waitUntil(() => BannerNotifications.notifications);

		assert.equal(BannerNotifications.notifications.length, 2, '2 notifications are present');

		assert.equal(BannerNotifications.notifications[0].text, alertText, 'Alert text is renered');

		assert.ok(
			BannerNotifications.notifications[0].icon.isAlert,
			'alert icon is rendered',
		);

		assert.equal(BannerNotifications.notifications[1].text, warningText);
		assert.ok(
			BannerNotifications.notifications[1].icon.isWarning,
			'warning icon is rendered',
		);

		await waitUntil(() => !BannerNotifications.notifications[0].isPresent);

		assert.equal(BannerNotifications.notifications.length, 0);
	});

	test('closes notifiction on click', async function(assert) {
		await render(hbs`<BannerNotifications />`);

		service.addNotification({ type: 'alert', text: 'text', disableAutoHide: true });

		await waitUntil(() => BannerNotifications.notifications);

		assert.ok(BannerNotifications.notifications[0].isPresent, 'a notifications is renered');

		await BannerNotifications.notifications[0].close();

		assert.notOk(BannerNotifications.notifications[0].isPresent, 'a notifications is removed');

	});
});
