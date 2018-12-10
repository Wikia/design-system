import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | Textarea', function (hooks) {
	setupRenderingTest(hooks);

	test('it renders', async function (assert) {
		this.set('textareaValue', 'text value');
		await render(hbs`<Textarea @value={{textareaValue}} />`);

		assert.dom('.wds-textarea').exists();
		assert.dom('.wds-textarea__field').hasValue('text value');
	});

	test('it passes maxlength to textarea', async function (assert) {
		await render(hbs`<Textarea @maxlength={{100}} />`);

		assert.dom('.wds-textarea__field').hasAttribute('maxlength', '100');
	});

	test('it shows length hint', async function (assert) {
		this.set('textareaValue', '');
		await render(hbs`
			<Textarea
				@value={{textareaValue}}
				@hasLengthHint={{true}}
				@maxlength={{100}}
			/>`);

		assert.dom('.wds-textarea__length-hint').hasText('100');
		assert.dom('.wds-textarea').hasClass('wds-has-length-hint');

		this.set('textareaValue', 'text value');
		assert.dom('.wds-textarea__length-hint').hasText('90');
	});

	test('it shows hint', async function (assert) {
		const exampleHint = 'example hint';
		this.set('exampleHint', exampleHint);

		await render(hbs`<Textarea @hint={{exampleHint}} />`);

		assert.dom('.wds-textarea__hint').hasText(exampleHint);
	});

	test('it adds has-error class', async function (assert) {
		await render(hbs`<Textarea @hasError={{true}} />`);

		assert.dom('.wds-textarea').hasClass('wds-has-error');
	});
});
