import { module, test } from 'qunit';
import wrapMeHelper from 'dummy/helpers/wrap-me';

module('Unit | Helper | wrap-me', () => {
	test('wrap-me helper is exported', assert => {
		assert.ok(wrapMeHelper.compute);
	});

	test('generate default html for passed content', assert => {
		const options = {};

		const html = wrapMeHelper.compute(['some text'], options);

		assert.equal(html, '<span>some text</span>');
	});

	test('generate html with passed content and one parameter', assert => {
		const options = {
			tagName: 'table',
		};

		const html = wrapMeHelper.compute(['some text'], options);

		assert.equal(html, '<table>some text</table>');
	});

	test('generate html with passed content and two parameters', assert => {
		const options = {
			tagName: 'div',
			className: 'my-class and another',
		};

		const html = wrapMeHelper.compute(['some text'], options);

		assert.equal(html, '<div class="my-class and another">some text</div>');
	});

	test('generate html with passed content and extraneous parameter (ignores the param)', assert => {
		const options = {
			notAValidParam: 'nope',
		};

		const html = wrapMeHelper.compute(['some text'], options);

		assert.equal(html, '<span>some text</span>');
	});

	test('generate html without any content passed', assert => {
		const options = {};

		const html = wrapMeHelper.compute([], options);

		assert.equal(html, '<span></span>');
	});

	test('generate html with unsafe content', assert => {
		const options = {};

		const html = wrapMeHelper.compute(
			['some<script>alert(0);</script>text'],
			options,
		);

		assert.equal(
			html,
			'<span>some&lt;script&gt;alert(0);&lt;/script&gt;text</span>',
		);
	});

	test('generate html with a link', assert => {
		const options = {
			tagName: 'a',
			href: '/d/g',
			className: 'guidelines-opener',
		};

		const html = wrapMeHelper.compute(['guidelines'], options);

		assert.equal(
			html,
			'<a class="guidelines-opener" href="/d/g">guidelines</a>',
		);
	});

	test('generate html with a link with a target', assert => {
		const options = {
			tagName: 'a',
			href: '/d/g',
			target: '_blank',
		};

		const html = wrapMeHelper.compute(['guidelines'], options);

		assert.equal(html, '<a href="/d/g" target="_blank">guidelines</a>');
	});
});
