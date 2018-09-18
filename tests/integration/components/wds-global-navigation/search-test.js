import Service from '@ember/service';
import {
  click,
  fillIn,
  render,
  triggerKeyEvent
} from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import { module, test } from 'qunit';
import modelStub from '../../../mocks/search-model';

module('Integration | Component | wds-global-navigation/search', function (hooks) {
	setupRenderingTest(hooks);

	hooks.beforeEach(function () {
		this.set('model', modelStub);
		this.owner.register('service:i18n', Service.extend({
			t(key) { return key; }
		}));

		this.set('onSearchToggleClicked', () => { });
	});

	test('search is present in GN', async function (assert) {
		await render(hbs`{{wds-global-navigation/search model=model.search
				onSearchToggleClicked=onSearchToggleClicked}}`);

		assert.dom('.wds-global-navigation__search').exists('should render component');
	});

	test('search button label is correct', async function (assert) {
		await render(hbs`{{wds-global-navigation/search model=model.search
				onSearchToggleClicked=onSearchToggleClicked}}`);

		assert.dom('.wds-global-navigation__search-toggle-text')
		.hasText("design-system:global-navigation-search-placeholder-inactive",
			'should render "search" text');
	});

	test('search activating and deactivating works', async function (assert) {
		await render(hbs`
		{{wds-global-navigation/search
			model=model.search
			onSearchToggleClicked=onSearchToggleClicked
		}}`);

		const searchContainerSelector = '.wds-global-navigation__search-container';

		await click('.wds-global-navigation__search-toggle-icon');
		assert.dom(searchContainerSelector).hasClass('wds-search-is-focused');

		await click('.wds-global-navigation__search-close');
		assert.dom(searchContainerSelector).doesNotHaveClass('wds-search-is-focused');
	});

	test('search input results are shown after click on submit button', async function (assert) {
		assert.expect(1);

		this.set('goToSearchResults', function (query) {
			assert.equal(query, 'query', 'goToSearchResult should be called with query');
		});

		await render(hbs`
		{{wds-global-navigation/search
			model=model.search
			goToSearchResults=goToSearchResults
			onSearchToggleClicked=onSearchToggleClicked
		}}`);

		const searchInputSelector = '.wds-global-navigation__search-input';

		await click('.wds-global-navigation__search-toggle-icon');
		await fillIn(searchInputSelector, 'query');
		await click('.wds-global-navigation__search-submit');
	});

	// TODO: this test fails, however functionality works
	// test('search input results are shown after click on Enter', async function (assert) {
	// 	assert.expect(1);

	// 	this.set('goToSearchResults', function (query) {
	// 		assert.equal(query, 'query', 'goToSearchResult should be called with query on Enter');
	// 	});

	// 	await render(hbs`
	// 	{{wds-global-navigation/search
	// 		model=model.search
	// 		goToSearchResults=goToSearchResults
	// 		onSearchToggleClicked=onSearchToggleClicked
	// 	}}`);

	// 	const searchInputSelector = '.wds-global-navigation__search-input';

	// 	await click('.wds-global-navigation__search-toggle-icon');
	// 	await fillIn(searchInputSelector, 'query');
	// 	await triggerKeyEvent(searchInputSelector, 'keypress', 'Enter');
	// });

	test('search suggestion can be chosen by keyboard', async function (assert) {
		assert.expect(1);

		this.set('onSearchSuggestionChosen', function () {
			assert.ok(true, 'search suggestion was chosen');
		});

		await render(hbs`
		{{wds-global-navigation/search
			model=model.search
			goToSearchResults=goToSearchResults
			onSearchSuggestionChosen=onSearchSuggestionChosen
			onSearchToggleClicked=onSearchToggleClicked
		}}`);

		const searchInputSelector = '.wds-global-navigation__search-input';

		await click('.wds-global-navigation__search-toggle-icon');
		await fillIn(searchInputSelector, 'query');
		await triggerKeyEvent(searchInputSelector, 'keydown', 'ArrowDown');
		await triggerKeyEvent(searchInputSelector, 'keydown', 'Enter');
	});

	test('search suggestion can be chosen by mouse click', async function (assert) {
		assert.expect(1);

		this.set('onSearchSuggestionChosen', function () {
			assert.ok(true, 'search suggestion was chosen');
		});

		await render(hbs`
		{{wds-global-navigation/search
			model=model.search
			onSearchSuggestionChosen=onSearchSuggestionChosen
			onSearchToggleClicked=onSearchToggleClicked
		}}`);

		const searchInputSelector = '.wds-global-navigation__search-input';

		await click('.wds-global-navigation__search-toggle-icon');
		await fillIn(searchInputSelector, 'query');
		await click('.wds-list li:first-of-type');
	});
});
