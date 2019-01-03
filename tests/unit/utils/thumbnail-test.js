import {
	thumbSize,
	normalizeThumbWidth,
	transparentImageBase64,
} from 'dummy/utils/thumbnail';
import { module, test } from 'qunit';

module('Unit | Utility | thumbnail', function() {
	test('defines thumb sizes', function(assert) {
		assert.equal(thumbSize.small, 284);
		assert.equal(thumbSize.medium, 340);
		assert.equal(thumbSize.large, 732);
		assert.equal(thumbSize.maximum, 985);
	});

	test('defines transparentImageBase64', async function(assert) {
		assert.equal(
			transparentImageBase64,
			'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==',
		);
	});

	test('can normalize thumb width', async function(assert) {
		assert.equal(normalizeThumbWidth(4), 284);
		assert.equal(normalizeThumbWidth(300), 340);
		assert.equal(normalizeThumbWidth(350), 732);
		assert.equal(normalizeThumbWidth(750), 985);
		assert.equal(normalizeThumbWidth(1000), 985);
	});
});
