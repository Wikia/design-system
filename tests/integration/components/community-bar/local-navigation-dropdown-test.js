import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { click, render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';
import Service from '@ember/service';

module(
	'Integration | Component | community-bar/local-navigation-dropdown',
	function(hooks) {
		setupRenderingTest(hooks);

		let clickedNavigationItemLinks = [];

		function createNavigationModel(level = 1) {
			if (level > 3) {
				return [];
			}

			const model = [];

			for (let i = 0; i < 4; i++) {
				model[i] = {
					href: `https://example.fandom.com/level/${level}/item/${i}`,
					title: `Level ${level} Item ${i}`,
					items: createNavigationModel(level + 1),
					tracking_label: `${level}-tracking-label-${i}`
				};
			}

			return model;
		}

		hooks.beforeEach(function () {
			this.owner.register(
				'service:i18n',
				Service.extend({
					t(msg) {
						return msg;
					},
				}),
			);

			this.set('onLinkClicked', function (event) {
				event.preventDefault();
				clickedNavigationItemLinks.push(event.target.href);
			});
		});

		test('should render with state', async function (assert) {
			const model = createNavigationModel();

			this.set('model', model);

			await render(hbs`{{community-bar/local-navigation-dropdown model=model onLinkClicked=(action onLinkClicked)}}`);

			assert.dom('.wds-community-bar__level-1 a').exists({ count: 4 });
			assert.dom('.wds-community-bar__level-2 li a').exists({ count: 4 * 4 });
			assert.dom('.wds-community-bar__level-3 li a').exists({ count: 4 * 4 * 4 });
		});

		async function verifySecondLevelNavigationItemOpened(assert) {
			await click('.wds-community-bar__level-1 li:nth-child(1) a');

			assert.dom('.wds-community-bar__level-1').hasClass('wds-is-hidden');

			let secondLevelNavigationItems = document.getElementsByClassName('wds-community-bar__level-2');

			for (let i = 0; i < secondLevelNavigationItems.length; i++) {
				assert.equal(secondLevelNavigationItems[i].classList.contains('wds-is-active'), i === 0);
			}
		}

		function verifySubLevelsClosed(assert) {
			assert.dom('.wds-community-bar__level-1').doesNotHaveClass('wds-is-hidden');
			assert.dom('.wds-community-bar__level-2').doesNotHaveClass('wds-is-active');
			assert.dom('.wds-community-bar__level-3').doesNotHaveClass('wds-is-active');
		}

		test('IW-1341 - should close navigation before navigating to level 1 title', async function (assert) {
			const model = createNavigationModel();

			this.set('model', model);

			await render(hbs`{{community-bar/local-navigation-dropdown model=model onLinkClicked=(action onLinkClicked)}}`);

			await verifySecondLevelNavigationItemOpened(assert);

			await click('.wds-community-bar__level-2.wds-is-active .wds-community-bar__navigation-header');

			verifySubLevelsClosed(assert);
		});

		async function verifyFirstThirdLevelNavigationOpened(assert) {
			await click('.wds-community-bar__level-2.wds-is-active li:first-child a');

			let thirdLevelNavigationItems = document.getElementsByClassName('wds-community-bar__level-3');

			for (let i = 0; i < thirdLevelNavigationItems.length; i++) {
				assert.equal(thirdLevelNavigationItems[i].classList.contains('wds-is-active'), i === 0);
			}
		}

		test('IW-1341 - should close navigation before navigating to level 2 title', async function (assert) {
			const model = createNavigationModel();

			this.set('model', model);

			await render(hbs`{{community-bar/local-navigation-dropdown model=model onLinkClicked=(action onLinkClicked)}}`);

			await verifySecondLevelNavigationItemOpened(assert);

			await verifyFirstThirdLevelNavigationOpened(assert);

			await click('.wds-community-bar__level-3.wds-is-active .wds-community-bar__navigation-header');

			verifySubLevelsClosed(assert);
		});

		test('IW-1341 - should close navigation before navigating to level 3 link', async function (assert) {
			const model = createNavigationModel();

			this.set('model', model);

			await render(hbs`{{community-bar/local-navigation-dropdown model=model onLinkClicked=(action onLinkClicked)}}`);

			await verifySecondLevelNavigationItemOpened(assert);

			await verifyFirstThirdLevelNavigationOpened(assert);

			await click('.wds-community-bar__level-3.wds-is-active li:first-child a');

			verifySubLevelsClosed(assert);
		});
	},
);
