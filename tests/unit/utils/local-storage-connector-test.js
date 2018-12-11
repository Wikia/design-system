import localStorageConnector from 'dummy/utils/local-storage-connector';
import { module, skip } from 'qunit';

module('Unit | Utility | local-storage-connector', function() {
	skip('it works', function(assert) {
		let result = localStorageConnector();
		assert.ok(result);
	});
});
