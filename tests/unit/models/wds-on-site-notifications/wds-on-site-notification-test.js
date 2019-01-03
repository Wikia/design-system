import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';
import OnSiteNotification from 'dummy/models/wds-on-site-notifications/wds-on-site-notification';

import Service from '@ember/service';

const fetchStub = Service.extend({
	getServiceUrl(...args) {
		return args.join('/');
	},
});
const loggerStub = Service.extend({
	warn() {}
});
const wikiVariablesStub = Service.extend({
	host: 'pixies.wikia.com',
});

function getNotificationStub() {
	return {
		type: 'announcement-notification',
		community: { id: '1308778', name: 'Rybatest Wikia' },
		refersTo: {
			uri: 'https://services.wikia.com/announcements/announcements/3808',
			createdBy: '4083617',
			type: 'announcement',
			snippet: 'Hey Been trying to meet you!',
			title: 'Test',
		},
		events: {
			total: 1,
			totalUniqueActors: 1,
			latestActors: [
				{
					id: '4083617',
					name: 'Jakubolek',
					avatarUrl:
						'https://vignette.wikia.nocookie.net/43960c5f-9f48-4921-abbb-42d2f4c5ca86',
				},
			],
			latestEvent: {
				when: '2018-12-18T09:40:01.000Z',
				causedBy: {
					id: '4083617',
					name: 'Jakubolek',
					avatarUrl:
						'https://vignette.wikia.nocookie.net/43960c5f-9f48-4921-abbb-42d2f4c5ca86',
				},
				uri: 'http://pixies.wikia.com',
				type: 'announcement-target',
			},
		},
		read: false,
	};
}

module(
	'Unit | Model | wds-on-site-notifications/wds-on-site-notification',
	function(hooks) {
		setupTest(hooks);

		hooks.beforeEach(function() {
			this.owner.register('service:fetch', fetchStub);
			this.owner.register('service:logger', loggerStub);
			this.owner.register('service:wiki-variables', wikiVariablesStub);
		});

		test('sets normalized data', function(assert) {
			const notification = OnSiteNotification.create(
				this.owner.ownerInjection(),
			);

			notification.setNormalizedData(getNotificationStub());

			assert.equal(notification.title, 'Test');
			assert.equal(notification.snippet, 'Hey Been trying to meet you!');
			assert.equal(
				notification.uri,
				'https://services.wikia.com/announcements/announcements/3808',
			);
			assert.equal(
				notification.latestEventUri,
				'http://pixies.wikia.com',
			);
			assert.equal(notification.timestamp, 1545126001);
			assert.equal(notification.communityName, 'Rybatest Wikia');
			assert.equal(notification.communityId, '1308778');
			assert.equal(notification.isUnread, true);
			assert.equal(notification.totalUniqueActors, 1);
			assert.deepEqual(notification.latestActors, [
				{
					avatarUrl:
						'https://vignette.wikia.nocookie.net/43960c5f-9f48-4921-abbb-42d2f4c5ca86',
					id: '4083617',
					name: 'Jakubolek',
					profileUrl: 'http://pixies.wikia.com/wiki/User:Jakubolek',
				},
			]);
			assert.equal(notification.type, 'announcement');
		});

		test('getTypeFromApiData works', async function(assert) {
			const notification = OnSiteNotification.create(
				this.owner.ownerInjection(),
			);

			assert.equal(
				notification.getTypeFromApiData({
					type: 'upvote-notification',
					refersTo: { type: 'discussion-post' },
				}),
				'discussion-upvote-reply',
			);
			assert.equal(
				notification.getTypeFromApiData({
					type: 'upvote-notification',
					refersTo: { type: 'some-other-type' },
				}),
				'discussion-upvote-post',
			);
			assert.equal(
				notification.getTypeFromApiData({
					type: 'replies-notification',
				}),
				'discussion-reply',
			);
			assert.equal(
				notification.getTypeFromApiData({
					type: 'announcement-notification',
				}),
				'announcement',
			);
			assert.equal(
				notification.getTypeFromApiData({ type: 'does-not-exist' }),
				undefined,
			);
		});

		test('markAsRead works', async function(assert) {
			assert.expect(2);

			const notification = OnSiteNotification.create(
				this.owner.ownerInjection(),
			);

			notification.markAsReadUsingSendBeacon = function() {
				assert.ok(true);
			};

			notification.markAsReadUsingFetch = function(willUnloadPage) {
				assert.notOk(willUnloadPage);
			};

			notification.markAsRead(false);
			notification.markAsRead(true);
		});

		test('markAsReadUsingSendBeacon works', async function(assert) {
			assert.expect(4);

			const origSendBeacon = window.navigator.sendBeacon;

			const notification = OnSiteNotification.create(
				this.owner.ownerInjection(),
			);

			notification.setNormalizedData(getNotificationStub());

			assert.ok(notification.isUnread);

			window.navigator.sendBeacon = function(markAsReadUrl, blob) {
				assert.equal(
					markAsReadUrl,
					'on-site-notifications//notifications/mark-as-read/by-uri',
				);
				assert.ok(blob);

				return true;
			};

			notification.markAsReadUsingSendBeacon().then(() => {
				assert.notOk(notification.isUnread);
			});

			window.navigator.sendBeacon = origSendBeacon;
		});

		test('markAsReadUsingSendBeacon fallbacks to markAsReadUsingFetch', async function(assert) {
			assert.expect(2);

			const origSendBeacon = window.navigator.sendBeacon;

			const notification = OnSiteNotification.create(
				this.owner.ownerInjection(),
			);

			notification.setNormalizedData(getNotificationStub());

			notification.markAsReadUsingFetch = function() {
				assert.ok(true);
			}

			window.navigator.sendBeacon = function() {
				return false;
			};

			// Fallback when sendBeacon returns false
			notification.markAsReadUsingSendBeacon();

			window.navigator.sendBeacon = function() {
				throw new Error('Test error');
			};

			// Fallback when sendBeacon throws
			notification.markAsReadUsingSendBeacon();

			window.navigator.sendBeacon = origSendBeacon;
		});

		test('markAsReadUsingFetch works', async function(assert) {
			const notification = OnSiteNotification.create(
				this.owner.ownerInjection(),
			);

			notification.setNormalizedData(getNotificationStub());

			notification.fetch.fetchFromOnSiteNotifications = function(
				uri,
				options,
			) {
				assert.equal(uri, '/notifications/mark-as-read/by-uri');
				assert.deepEqual(options, {
					body:
						'["https://services.wikia.com/announcements/announcements/3808"]',
					headers: {
						'Content-Type': 'application/json',
					},
					method: 'POST',
				});

				return {
					then(cb) {
						cb();
					},
				};
			};

			notification.markAsReadUsingFetch();

			assert.notOk(notification.isUnread);

			notification.fetch.fetchFromOnSiteNotifications = function(
				uri,
				options,
			) {
				assert.equal(uri, '/notifications/mark-as-read/by-uri');
				assert.deepEqual(options, {
					body:
						'["https://services.wikia.com/announcements/announcements/3808"]',
					headers: {
						'Content-Type': 'application/json',
					},
					method: 'POST',
					timeout: 500,
				});

				return {
					then(cb) {
						cb();
					},
				};
			};

			notification.markAsReadUsingFetch(true);
		});
	},
);
