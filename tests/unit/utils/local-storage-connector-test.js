import localStorageAdapter from 'dummy/utils/local-storage-connector';
import { module, test } from 'qunit';

module('Unit | Utility | local-storage-connector', function() {
	test('getItem/setItem works', assert => {
		localStorageAdapter.setItem('foo', 'bar');
		assert.strictEqual(localStorageAdapter.getItem('foo'), 'bar');
	});

	test('clear works', assert => {
		localStorageAdapter.setItem('foo', 'bar');
		localStorageAdapter.removeItem('foo');
		assert.strictEqual(localStorageAdapter.getItem('foo') || false, false);
	});

	test('removeItem works', assert => {
		localStorageAdapter.setItem('foo', 'bar');
		localStorageAdapter.removeItem('foo');
		assert.strictEqual(localStorageAdapter.getItem('foo') || false, false);
	});
});
