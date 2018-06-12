import {module, test} from 'qunit';
import {setupRenderingTest} from 'ember-qunit';
import EmberObject from '@ember/object';
import Service from '@ember/service';
import {render} from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const notificationDataStub = {
	communityId: 123,
	communityName: 'My Test Wiki',
	timestamp: 1528793961358,
	latestActors: [{
		avatarUrl: 'https://vignette.wikia.nocookie.net/eb7f3136-d079-4826-ab1c-160738494f3a',
		id: 24851773,
		name: 'Username1',
		profileUrl: 'http://undefined/wiki/User'
	}],
	latestEventUri: 'http://community.wikia.com/d/p/123',
	snippet: 'Snippet.',
	uri: 'http://community.wikia.com/d/p/123'
};

function getModelStub(type, title) {
	const modelStub = new EmberObject(notificationDataStub);

	modelStub.setProperties({ type, title });

	return modelStub;
}

module('Integration | Component | wds-on-site-notifications/notification-card', function (hooks) {
	setupRenderingTest(hooks);

	hooks.beforeEach(function () {
		this.owner.register('service:i18n', Service.extend({
			t() {
				return 'some string';
			}
		}));
	});

	module('for notification of any type', function(hooks) {
		hooks.beforeEach(function () {
			this.set('model', getModelStub('discussion-reply'));
		});

		test('it should render as an LI with a proper classname', async function (assert) {
			await render(hbs`{{wds-on-site-notifications/notification-card model=model}}`);

			assert.dom('li').hasClass('wds-notification-card');
		});

		test('it should contain all the elements common for all notification types', async function (assert) {
			await render(hbs`{{wds-on-site-notifications/notification-card model=model}}`);

			//icon
			assert.dom('.wds-notification-card__icon-wrapper svg').exists();

			assert.dom('.wds-notification-card__body').exists();
			assert.dom('.wds-notification-card__text').exists();

			//timestamp
			assert.dom('.wds-notification-card__context-item').exists();

			//separator
			assert.dom('.wds-notification-card__context-separator').exists();

			//community name
			assert.dom('.wds-notification-card__community').exists();
		});

		test('it should display a proper community name', async function (assert) {
			await render(hbs`{{wds-on-site-notifications/notification-card model=model}}`);

			assert.dom('.wds-notification-card__community').hasText(notificationDataStub.communityName);
		});
	});

	module('for notification of type discussion-reply without title', function(hooks) {
		hooks.beforeEach(function () {
			this.set('model', getModelStub('discussion-reply', null));
		});

		test('it should render snippet', async function (assert) {
			await render(hbs`{{wds-on-site-notifications/notification-card model=model}}`);

			assert.dom('.wds-notification-card__snippet').exists();
		});

		test('it should not render announcement actor', async function (assert) {
			await render(hbs`{{wds-on-site-notifications/notification-card model=model}}`);

			assert.dom('.notification-entity-announcement-author').doesNotExist();
		});
	});

	module('for notification of type discussion-reply with title', function(hooks) {
		hooks.beforeEach(function () {
			this.set('model', getModelStub('discussion-reply', 'My Title'));
		});

		test('it should not render snippet', async function (assert) {
			await render(hbs`{{wds-on-site-notifications/notification-card model=model}}`);

			assert.dom('.wds-notification-card__snippet').doesNotExist();
		});

		test('it should not render announcement actor', async function (assert) {
			await render(hbs`{{wds-on-site-notifications/notification-card model=model}}`);

			assert.dom('.notification-entity-announcement-author').doesNotExist();
		});
	});

});
