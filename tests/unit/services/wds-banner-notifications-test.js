import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import wait from 'ember-test-helpers/wait'

module('Unit | Service | wds-banner-notifications', function(hooks) {
	setupTest(hooks);

	test('can add notification', async function(assert) {
		let service = this.owner.lookup('service:wds-banner-notifications');

		service.set('hideAfterMs', 0);

		service.addNotification({ type: 'alert', text: 'test' });

		assert.deepEqual(service.model[0], {
			id: 1,
			text: 'test',
			type: 'alert',
		});

		assert.equal(service.model.length, 1);

		// Wait so first notification is autodissmissed
		await wait(1);

		assert.equal(service.model.length, 0);

		service.addNotification({
			type: 'alert',
			text: 'test',
			disableAutoHide: true,
		});

		assert.deepEqual(service.model[0], {
			disableAutoHide: true,
			id: 2,
			text: 'test',
			type: 'alert',
		});

		// Wait so we can check if notification is still there
		await wait(1);

		assert.equal(service.model.length, 1);
	});
});
