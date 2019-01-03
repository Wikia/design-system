import wdsTrack from 'dummy/utils/wds-track';
import { module, test } from 'qunit';

function getTrackFunction(assert) {
	return function({ category, label, action }) {
		assert.equal(category, 'test-category');
		assert.equal(label, 'track-label');
		assert.equal(action, 'test-action');
	};
}

function createElements(category, returnElement = true ) {
	const element = document.createElement('div');

	const childElement = document.createElement('div');
	childElement.setAttribute('data-tracking-label', 'track-label');

	if (category) {
		childElement.setAttribute('data-tracking-category', category);
	}

	element.appendChild(childElement);

	const browserEvent = {
		target: {
			closest() {
				return returnElement ? childElement : null;
			},
		},
	};

	return { element, browserEvent };
}

module('Unit | Utility | wds-track', function() {
	test('triggers track function', function(assert) {
		const { element, browserEvent } = createElements('test-category');

		wdsTrack(
			browserEvent,
			element,
			getTrackFunction(assert),
			'test-action',
		);
	});

	test('triggers track function with given category', async function(assert) {
		const { element, browserEvent } = createElements();

		wdsTrack(
			browserEvent,
			element,
			getTrackFunction(assert),
			'test-action',
			'test-category'
		);
	});

	test('does not call track function if no element found', async function(assert) {
		assert.expect(0);
		const { element, browserEvent } = createElements('', false);

		wdsTrack(
			browserEvent,
			element,
			getTrackFunction(assert),
			'test-action',
			'test-category'
		);
	});
});
