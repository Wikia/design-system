import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, waitFor } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | wds-banner-notifications', function (hooks) {
	let service;

	setupRenderingTest(hooks);

	hooks.beforeEach(function () {
		service = this.owner.lookup('service:wds-banner-notifications');
		service.set('hideAfterMs', 100);
	});

	test('it shows notifications and hides them after timeout', async function (assert) {
		await render(hbs`{{wds-banner-notifications}}`);

		assert.dom('.wds-banner-notification__container').exists();

		const alertType = 'alert';
		const warningType = 'warning';
		const alertText = 'This is an alert';
		const warningText = 'This is a warning';
		service.addNotification({ type: alertType, text: alertText });
		service.addNotification({ type: warningType, text: warningText });

		try {
			await waitFor('.wds-banner-notification', {
				timeout: 100,
				count: 2
			});
		} catch (error) {
			throw new Error(`.wds-banner-notification weren't created`);
		}

		assert.dom('.wds-banner-notification__icon use[*|href="#wds-icons-error-small"]').exists();
		assert.dom('.wds-banner-notification__text').hasText(alertText);

		assert.dom('.wds-banner-notification__icon use[*|href="#wds-icons-alert-small"]').exists();
		assert.dom('.wds-banner-notification__text').hasText(warningTextText);

		try {
			await waitFor('.wds-banner-notification', {
				timeout: 100,
				count: 0
			});
		} catch (error) {
			throw new Error(`.wds-banner-notification weren't destroyed`);
		}
	});
});
