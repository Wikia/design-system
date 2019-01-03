import localStorage, { localStorageAdapter } from 'dummy/utils/local-storage-connector';
import { module, test } from 'qunit';
/* global require */

module('Unit | Utility | local-storage-connector', function() {
	test('getItem/setItem works on localStorage', assert => {
		localStorage.setItem('foo', 'bar');
		assert.strictEqual(localStorage.getItem('foo'), 'bar');

		localStorage.removeItem('foo');
		assert.strictEqual(localStorage.getItem('foo'), null);
	});

	test('getItem/setItem works', assert => {
		localStorageAdapter.setItem('foo', 'bar');
		assert.strictEqual(localStorageAdapter.getItem('foo'), 'bar');
	});

	test('clear works', assert => {
		localStorageAdapter.setItem('foo', 'bar');
		localStorageAdapter.clear();
		assert.strictEqual(localStorageAdapter.getItem('foo'), undefined);
	});

	test('removeItem works', assert => {
		localStorageAdapter.setItem('foo', 'bar');
		localStorageAdapter.removeItem('foo');
		assert.strictEqual(localStorageAdapter.getItem('foo'), undefined);
	});

	test('localStorageAdapter returned if window.localStorage is not avaialable', assert => {
		require.unsee('dummy/utils/local-storage-connector');

		const origLocalStorageSet = window.localStorage.setItem;

		window.localStorage.setItem = false;

		const localStorageModule = require('dummy/utils/local-storage-connector')

		assert.equal(localStorageModule.default, localStorageModule.localStorageAdapter);

		window.localStorage.setItem = origLocalStorageSet;
	});
});
