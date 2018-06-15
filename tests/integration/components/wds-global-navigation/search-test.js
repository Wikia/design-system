import {module, test} from 'qunit';
import {setupRenderingTest} from 'ember-qunit';
import Service from '@ember/service';
import {click, render} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import modelStub from '../../../mocks/search-model';

module('Integration | Component | wds-global-navigation/search', function (hooks) {
	setupRenderingTest(hooks);

	hooks.beforeEach(function () {
		this.set('model', modelStub);
		this.owner.register('service:i18n', Service.extend({
			t(key) {
				return key;
			}
		}));
	});

	test('search is present', async function (assert) {
		await render(hbs`{{wds-global-navigation/search model=model.search}}`);

		assert.equal(this.element.querySelectorAll('.wds-global-navigation__search').length, 1,
			'should render component');
	});

	test('button label is correct', async function (assert) {
		await render(hbs`{{wds-global-navigation/search model=model.search}}`);

		assert.equal(this.element.querySelectorAll('.wds-global-navigation__search-toggle-text')[0].innerText.trim(), "design-system:global-navigation-search-placeholder-inactive",
			'should render "search" text');
	});

	test('search is activated', async function (assert) {
		assert.expect(1);

		this.set('model', modelStub);
		this.set('activateSearch', function() {
			assert.ok(true);
		});

		await render(hbs`{{wds-global-navigation/search model=model.search activateSearch=activateSearch}}`);
	});

	test('search is deactivated', async function (assert) {
		assert.expect(1);

		this.set('model', modelStub);
		this.set('deactivateSearch', function() {
			assert.ok(true);
		});

		await render(hbs`{{wds-global-navigation/search model=model.search deactivateSearch=deactivateSearch}}`);
	});

		test('search suggestion is chosen', async function (assert) {
			assert.expect(1);

			this.set('model', modelStub);
			this.set('onSearchSuggestionChosen', function() {
				assert.ok(true);
			});

		await render(hbs`{{wds-global-navigation/search model=model.search onSearchSuggestionChosen=onSearchSuggestionChosen}}`);
	});

	test('search suggestion is chosen', async function (assert) {
		assert.expect(1);

		this.set('model', modelStub);
		this.set('goToSearchResults', function() {
			assert.ok(true);
		});

		await render(hbs`{{wds-global-navigation/search model=model.search goToSearchResults=goToSearchResults}}`);
})
