import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | wds-spinner', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
	await render(hbs`{{wds-spinner active=true}}`);

	assert.ok(this.element.querySelector('svg.wds-spinner'))
  });

  test('overlay', async function(assert) {
	await render(hbs`{{wds-spinner active=true}}`);

	assert.ok(this.element.querySelector('svg.wds-spinner'))
  });

  test('isBlock', async function(assert) {
	await render(hbs`{{wds-spinner isBlock=true}}`);

	assert.ok(this.element.querySelector('svg.wds-spinner').classList.contains('wds-spinner__block'))
  });

  test('radius', async function(assert) {
	await render(hbs`{{wds-spinner radius=60}}`);

	assert.equal(this.element.querySelector('svg.wds-spinner g').getAttribute('transform'), 'translate(63, 63)')
  });

  test('diameter', async function(assert) {
	await render(hbs`{{wds-spinner active=true}}`);

	const svg = this.element.querySelector('svg.wds-spinner');

	assert.equal(svg.getAttribute('height'), 66);
	assert.equal(svg.getAttribute('width'), 66);
	assert.equal(svg.getAttribute('viewBox'), '0 0 66 66')
  });

  test('stroke', async function(assert) {
	await render(hbs`{{wds-spinner active=true stroke=100}}`);

	const circle = this.element.querySelector('svg.wds-spinner circle');

	assert.equal(circle.getAttribute('stroke-dashoffset'), 188.49555921538757);
	assert.equal(circle.getAttribute('stroke-width'), 6);
	assert.equal(circle.getAttribute('stroke-dasharray'), 188.49555921538757);
  });
});
