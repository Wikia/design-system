import {module, test} from 'qunit';
import {setupRenderingTest} from 'ember-qunit';
import Service from '@ember/service';
import {click, render, fillIn, triggerEvent} from '@ember/test-helpers';
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
		this.set('activateSearch', () => {});
		this.set('deactivateSearch', () => {});
	});

	test('search is present in GN', async function (assert) {
		await render(hbs`{{wds-global-navigation/search model=model.search}}`);

		assert.equal(this.element.querySelectorAll('.wds-global-navigation__search').length, 1,
			'should render component');
	});

	test('search button label is correct', async function (assert) {
		await render(hbs`{{wds-global-navigation/search model=model.search}}`);

		assert.equal(this.element.querySelectorAll('.wds-global-navigation__search-toggle-text')[0].innerText.trim(), "design-system:global-navigation-search-placeholder-inactive",
			'should render "search" text');
	});

	test('search activating and deactivating works', async function (assert) {

		assert.expect(2);

		this.set('activateSearch', function() {
			assert.ok(true, 'search is activated');
		});

		this.set('deactivateSearch', function() {
			assert.ok(true, 'search was deactivated');
		});
		await render(hbs`
		{{wds-global-navigation/search 
			model=model.search 
			activateSearch=activateSearch 
			deactivateSearch=deactivateSearch
			}}`
		);
		await click('.wds-global-navigation__search-toggle-icon');

		await click('.wds-global-navigation__search-close');
	});

	test('search input results are shown after click on submit button', async function (assert) {

		assert.expect(1);

		this.set('goToSearchResults', function() {
			assert.ok(true, 'one suggestion was picked');
		});

		await render(hbs`
		{{wds-global-navigation/search 
			model=model.search 
			goToSearchResults=goToSearchResults 
			activateSearch=activateSearch
			deactivateSearch=deactivateSearch
			}}`);

		const searchInput = '.wds-global-navigation__search-input';

		await click('.wds-global-navigation__search-toggle-icon');
		await fillIn(searchInput, 'query');
		await click('.wds-global-navigation__search-submit');
	});

	test('search input results are shown after click on Enter', async function (assert) {

		assert.expect(1);

		this.set('goToSearchResults', function() {
			assert.ok(true, 'one suggestion was picked');
		});

		await render(hbs`
		{{wds-global-navigation/search 
			model=model.search 
			goToSearchResults=goToSearchResults 
			activateSearch=activateSearch
			deactivateSearch=deactivateSearch
			}}`);

		const searchInput = '.wds-global-navigation__search-input';

		await click('.wds-global-navigation__search-toggle-icon');
		await fillIn(searchInput, 'query');
		await triggerEvent(searchInput, 'keyUp', {key: 13});
	});

	test('search suggestion can be chosen by keyboard', async function (assert) {

		assert.expect(1);

		this.set('onSearchSuggestionChosen', function() {
			assert.ok(true, 'search suggestion was chosen');
		});

		await render(hbs`
		{{wds-global-navigation/search 
			model=model.search 
			goToSearchResults=goToSearchResults 
			activateSearch=activateSearch
			deactivateSearch=deactivateSearch
			}}`);

		const searchInput = '.wds-global-navigation__search-input';

		await click('.wds-global-navigation__search-toggle-icon');
		await fillIn(searchInput, 'query');
		await triggerEvent(searchInput, 'keyUp', {key: 40});
		await triggerEvent(searchInput, 'keyUp', {key: 13});
	});

	test('search suggestion can be chosen by mouse click', async function (assert) {

		assert.expect(1);

		this.set('onSearchSuggestionChosen', function() {
			assert.ok(true, 'search suggestion was chosen');
		});

		await render(hbs`
		{{wds-global-navigation/search 
			model=model.search 
			goToSearchResults=goToSearchResults 
			activateSearch=activateSearch
			deactivateSearch=deactivateSearch
			}}`);

		const searchInput = '.wds-global-navigation__search-input';

		await click('.wds-global-navigation__search-toggle-icon');
		await fillIn(searchInput, 'query');
		await click('.wds-list li:first-of-type');
	});
});
