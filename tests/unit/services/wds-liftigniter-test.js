import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | wds-liftigniter', function(hooks) {
	setupTest(hooks);

	test('it exists', function(assert) {
		let service = this.owner.lookup('service:wds-liftigniter');
		assert.ok(service);
	});
});
