import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import EmberObject from '@ember/object';
import Service from '@ember/service';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

const notificationDataStub = {
	communityId: 123,
	communityName: 'My Test Wiki',
	timestamp: 1528793961358,
	latestActors: [
		{
			avatarUrl: 'https://vignette.wikia.nocookie.net/eb7f3136-d079-4826-ab1c-160738494f3a',
			id: 24851773,
			name: 'Username1',
			profileUrl: 'http://undefined/wiki/User1'
		},
		{
			avatarUrl: 'https://vignette.wikia.nocookie.net/eb7f3136-d079-4826-ab1c-160738494f3a',
			id: 24851774,
			name: 'Username2',
			profileUrl: 'http://undefined/wiki/User2'
		},
		{
			avatarUrl: 'https://vignette.wikia.nocookie.net/eb7f3136-d079-4826-ab1c-160738494f3a',
			id: 24851775,
			name: 'Username3',
			profileUrl: 'http://undefined/wiki/User3'
		}

	],
	latestEventUri: 'http://community.wikia.com/d/p/123',
	snippet: 'My announcement',
	uri: 'http://community.wikia.com/d/p/123',
	totalUniqueActors: 3
};

function getModelStub(type, title, snippet = '') {
	const modelStub = new EmberObject(notificationDataStub);

	modelStub.setProperties({ type, title, snippet });

	return modelStub;
}

module('Integration | Component | on-site-notifications/notification-card', function (hooks) {
	setupRenderingTest(hooks);

	hooks.beforeEach(function () {
		this.owner.register('service:i18n', Service.extend({
			t() {
				return 'some string';
			}
		}));

		this.set('track', function() {});
	});

	module('for notification of any type', function(hooks) {
		hooks.beforeEach(function () {
			this.set('model', getModelStub('discussion-reply'));
		});

		test('it should render as an LI with a proper classname', async function (assert) {
			await render(hbs`{{on-site-notifications/notification-card model=model track=track}}`);

			assert.dom('li').hasClass('wds-notification-card');
		});

		test('it should contain all the elements common for all notification types', async function (assert) {
			await render(hbs`{{on-site-notifications/notification-card model=model track=track}}`);

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
			await render(hbs`{{on-site-notifications/notification-card model=model track=track}}`);

			assert.dom('.wds-notification-card__community').hasText(notificationDataStub.communityName);
		});
	});

	module('for notification of type discussion-reply without title', function(hooks) {
		hooks.beforeEach(function () {
			this.set('model', getModelStub('discussion-reply', null));
		});

		test('it should render snippet', async function (assert) {
			await render(hbs`{{on-site-notifications/notification-card model=model track=track}}`);

			assert.dom('.wds-notification-card__snippet').exists();
		});

		test('it should not render announcement author', async function (assert) {
			await render(hbs`{{on-site-notifications/notification-card model=model track=track}}`);

			assert.dom('.wds-notification-card__last-actor').doesNotExist();
		});
	});

	module('for notification of type discussion-reply with title', function(hooks) {
		hooks.beforeEach(function () {
			this.set('model', getModelStub('discussion-reply', 'My Title'));
		});

		test('it should not render snippet', async function (assert) {
			await render(hbs`{{on-site-notifications/notification-card model=model track=track}}`);

			assert.dom('.wds-notification-card__snippet').doesNotExist();
		});

		test('it should not render announcement author', async function (assert) {
			await render(hbs`{{on-site-notifications/notification-card model=model track=track}}`);

			assert.dom('.wds-notification-card__last-actor').doesNotExist();
		});
	});

	module('for notification of type discussion-reply with more that 2 latest actors', function(hooks) {
		hooks.beforeEach(function () {
			this.set('model', getModelStub('discussion-reply', 'My Title'));
		});

		test('it should render wds-avatar-stack', async function (assert) {
			await render(hbs`{{on-site-notifications/notification-card model=model track=track}}`);

			assert.dom('.wds-avatar-stack').exists();
		});

		test('it should render specific number of avatars inside avatar stack', async function (assert) {
			await render(hbs`{{on-site-notifications/notification-card model=model track=track}}`);

			assert.dom('.wds-avatar-stack .wds-avatar').exists({ count: 3 });
		});
	});

	module('for notification of type discussion-upvote-reply with more that 2 latest actors', function(hooks) {
		hooks.beforeEach(function () {
			this.set('model', getModelStub('discussion-upvote-reply', 'My Title'));
		});

		test('it should not render wds-avatar-stack', async function (assert) {
			await render(hbs`{{on-site-notifications/notification-card model=model track=track}}`);

			assert.dom('.wds-avatar-stack').doesNotExist();
		});
	});

	module('for notification of type discussion-upvote-post with more that 2 latest actors', function(hooks) {
		hooks.beforeEach(function () {
			this.set('model', getModelStub('discussion-upvote-post', 'My Title'));
		});

		test('it should not render wds-avatar-stack', async function (assert) {
			await render(hbs`{{on-site-notifications/notification-card model=model track=track}}`);

			assert.dom('.wds-avatar-stack').doesNotExist();
		});
	});

	module('for notification of type announcement', function(hooks) {
		const announcementText = 'My announcement';

		hooks.beforeEach(function () {
			this.set('model', getModelStub('announcement', '', announcementText));
		});

		test('it should not render wds-avatar-stack', async function (assert) {
			await render(hbs`{{on-site-notifications/notification-card model=model track=track}}`);

			assert.dom('.wds-avatar-stack').doesNotExist();
		});

		test('it should render its title in the text container', async function (assert) {
			await render(hbs`{{on-site-notifications/notification-card model=model track=track}}`);

			assert.dom('.wds-notification-card__text').hasText(announcementText);
		});

		test('it should not render announcement author', async function (assert) {
			await render(hbs`{{on-site-notifications/notification-card model=model track=track}}`);

			assert.dom('.wds-notification-card__last-actor').hasText(notificationDataStub.latestActors[0].name);
		});
	});
});
