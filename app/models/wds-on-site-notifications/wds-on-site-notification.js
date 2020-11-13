import RSVP from 'rsvp';

import EmberObject, { get } from '@ember/object';
import { inject as service } from '@ember/service';
import { convertToTimestamp } from '@wikia/ember-fandom/utils/iso-date-time';

import notificationTypes from '../../utils/notification-types';

export default EmberObject.extend({
	fetch: service(),
	logger: service(),
	wikiUrls: service(),
	wikiVariables: service(),

	title: null,
	snippet: null,
	timestamp: null,
	communityName: null,
	type: null,
	isUnread: false,
	totalUniqueActors: 1,
	latestActors: null,
	uri: null,
	refersToAuthorId: null,

	init() {
		this._super(...arguments);
		this.latestActors = [];
	},

	setNormalizedData(notificationData) {
		this.setProperties({
			contentCreatorName: get(notificationData, 'refersTo.createdByName'),
			title: get(notificationData, 'refersTo.title'),
			snippet: get(notificationData, 'refersTo.snippet'),
			uri: get(notificationData, 'refersTo.uri'),
			refersToAuthorId: get(notificationData, 'refersTo.createdBy'),
			latestEventUri: get(notificationData, 'events.latestEvent.uri'),
			timestamp: convertToTimestamp(get(notificationData, 'events.latestEvent.when')),
			communityName: get(notificationData, 'community.name'),
			communityId: get(notificationData, 'community.id'),
			isUnread: notificationData.read === false,
			totalUniqueActors: get(notificationData, 'events.totalUniqueActors'),
			latestActors: this.createActors(get(notificationData, 'events.latestActors')),
			type: this.getTypeFromApiData(notificationData),
			metadata: this.getMetadata(notificationData),
		});
	},

	createActors(actors) {
		return actors.map((actor) => {
			actor.profileUrl = this.wikiUrls.build({
				host: this.get('wikiVariables.host'),
				namespace: 'User',
				title: actor.name
			});

			return actor;
		});
	},

	getTypeFromApiData(apiData) {
		switch (apiData.type) {
			case 'upvote-notification':
				return apiData.refersTo.type === 'discussion-post'
					? notificationTypes.discussionUpvoteReply
					: notificationTypes.discussionUpvotePost;
			case 'replies-notification':
				return notificationTypes.discussionReply;
			case 'announcement-notification':
				return notificationTypes.announcement;
			case 'post-at-mention-notification':
				return notificationTypes.postAtMention;
			case 'thread-at-mention-notification':
				return notificationTypes.threadAtMention;
			case 'article-comment-reply-notification':
				return notificationTypes.articleCommentReply;
			case 'article-comment-at-mention-notification':
				return notificationTypes.articleCommentAtMention;
			case 'article-comment-reply-at-mention-notification':
				return notificationTypes.articleCommentReplyAtMention;
			case 'message-wall-post-notification':
				return notificationTypes.messageWallPost;
			case 'message-wall-reply-notification':
				return notificationTypes.messageWallReply;
			case 'wall-post-removed-notification':
				return notificationTypes.messageWallPostRemoved;
			case 'talk-page-notification':
				return notificationTypes.talkPageMessage;
		}
	},

	getMetadata(notification) {
		let metadata =
			typeof notification.metadata === 'undefined' || notification.metadata === null ? null : notification.metadata;
		if (typeof metadata === 'string') {
			try {
				metadata = JSON.parse(metadata);
			} catch (e) {
				// continue regardless of error
			}
		}
		// Caveat: if the metadata was not serialized JSON, a string could be returned instead of an object
		return metadata;
	},

	markAsRead(willUnloadPage) {
		if (willUnloadPage && window.navigator.sendBeacon) {
			return this.markAsReadUsingSendBeacon();
		}

		return this.markAsReadUsingFetch(willUnloadPage);
	},

	markAsReadUsingSendBeacon() {
		const body = JSON.stringify([this.uri]);
		const markAsReadUrl = this.fetch.getServiceUrl(
			'on-site-notifications',
			'/notifications/mark-as-read/by-uri'
		);

		try {
			const blob = new Blob([body], {
				type: 'application/json'
			});

			if (window.navigator.sendBeacon(markAsReadUrl, blob) === true) {
				return RSVP.Promise.resolve()
					.then(() => {
						this.set('isUnread', false);
					});
			} else {
				return this.markAsReadUsingFetch(true);
			}
		} catch (exception) {
			// See http://crbug.com/490015#c99
			this.logger.warn('Error when sending beacon', exception);
			return this.markAsReadUsingFetch(true);
		}
	},

	markAsReadUsingFetch(willUnloadPage) {
		const body = JSON.stringify([this.uri]);
		const options = {
			body,
			headers: {
				'Content-Type': 'application/json'
			},
			method: 'POST',
		};

		if (willUnloadPage) {
			// Keep it low as it's blocking user from navigating to the notification target
			options.timeout = 500;
		}

		return this.fetch
			.fetchFromOnSiteNotifications('/notifications/mark-as-read/by-uri', options)
			.then(() => {
				this.set('isUnread', false);
			});
	}
});
