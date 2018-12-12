import localStorageConnector from 'dummy/utils/local-storage-connector';
import { module, test } from 'qunit';

module('Unit | Utility | local-storage-connector', function() {
	test('getItem/setItem works', assert => {
		const localStorageAdapter = localStorageConnector.localStorageAdapter;

		localStorageAdapter.setItem('foo', 'bar');
		assert.strictEqual(localStorageAdapter.getItem('foo'), 'bar');
	});

	test('clear works', assert => {
		const localStorageAdapter = localStorageConnector.localStorageAdapter;

		localStorageAdapter.setItem('foo', 'bar');
		localStorageAdapter.removeItem('foo');
		assert.strictEqual(localStorageAdapter.getItem('foo') || false, false);
	});

	test('removeItem works', assert => {
		const localStorageAdapter = localStorageConnector.localStorageAdapter;

		localStorageAdapter.setItem('foo', 'bar');
		localStorageAdapter.removeItem('foo');
		assert.strictEqual(localStorageAdapter.getItem('foo') || false, false);
	});
});
