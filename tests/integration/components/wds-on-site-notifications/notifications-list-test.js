import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import EmberObject from '@ember/object';
import Service from '@ember/service';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

function getModelStub(length) {
	const data = [];

	for (let i = 0; i < Number(length); i++) {
		data.push(new EmberObject({
			communityId: 123,
			communityName: "My Test Wiki",
			timestamp: 1528793961358,
			latestActors: [{
				avatarUrl: 'https://vignette.wikia.nocookie.net/eb7f3136-d079-4826-ab1c-160738494f3a',
				id: 24851773,
				name: 'Username1',
				profileUrl: 'http://community.wikia.com/wiki/User:Me'
			}],
			latestEventUri: 'http://community.wikia.com/d/p/123',
			snippet: 'Snippet.',
			title: 'Title',
			type: 'discussion-reply',
			uri: 'http://community.wikia.com/d/p/123'

		}));
	}

	return new EmberObject({ data });
}

module('Integration | Component | wds-on-site-notifications/notifications-list', function (hooks) {
	setupRenderingTest(hooks);

	hooks.beforeEach(function () {
		this.owner.register('service:i18n', Service.extend({
			t() {
				return 'some string';
			}
		}));

		this.set('track', function(){});
	});

	module('with loaded results', function (hooks) {
		hooks.beforeEach(function () {
			this.owner.register('service:wds-on-site-notifications', Service.extend({
				isLoading: false,

				init() {
					this._super(...arguments);
					this.set('model', getModelStub(2));
				}
			}));
		});

		test('it should render as a UL element with proper classnames', async function (assert) {
			await render(hbs`{{wds-on-site-notifications/notifications-list track=track}}`);

			assert.dom('ul').hasClass('wds-notifications__notification-list');
			assert.dom('ul').hasClass('wds-list');
			assert.dom('ul').hasClass('wds-has-lines-between');
		});

		test('it should render a proper number of notification-card components', async function (assert) {
			await render(hbs`{{wds-on-site-notifications/notifications-list track=track}}`);

			assert.dom('.wds-notification-card').exists({ count: 2 });
		});

		test('it should not render loading spinner', async function (assert) {
			await render(hbs`{{wds-on-site-notifications/notifications-list track=track}}`);

			assert.dom('.wds-spinner').doesNotExist();
		});
	});

	module('when loading results', function (hooks) {
		hooks.beforeEach(function () {
			this.owner.register('service:wds-on-site-notifications', Service.extend({
				isLoading: true,

				init() {
					this._super(...arguments);
					this.set('model', getModelStub(0));
				}
			}));
		});

		test('it should render as a UL element with proper classnames', async function (assert) {
			await render(hbs`{{wds-on-site-notifications/notifications-list track=track}}`);

			assert.dom('ul').hasClass('wds-notifications__notification-list');
			assert.dom('ul').hasClass('wds-list');
			assert.dom('ul').hasClass('wds-has-lines-between');
		});

		test('it should render loading spinner', async function (assert) {
			await render(hbs`{{wds-on-site-notifications/notifications-list track=track}}`);

			assert.dom('.wds-spinner').exists();
		});
	});
});
