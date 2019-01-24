import { inject as service } from '@ember/service';
import { alias } from '@ember/object/computed';
import Component from '@ember/component';
import { computed } from '@ember/object';
import wrapMeHelper from '@wikia/ember-fandom/helpers/wrap-me';
import extend from '@wikia/ember-fandom/utils/extend';
import notificationTypes from '../../utils/notification-types';

export default Component.extend(
	{
		i18n: service(),
		logger: service(),
		wdsOnSiteNotifications: service(),
		wikiUrls: service(),
		wikiVariables: service(),

		classNames: ['wds-notification-card'],
		classNameBindings: ['isUnread:wds-is-unread'],
		tagName: 'li',

		isUnread: alias('model.isUnread'),

		iconName: computed('model.type', function () {
			const type = this.get('model.type');

			if (this.isDiscussionReply(type)) {
				return 'wds-icons-reply-small';
			} else if (this.isAnnouncement(type)) {
				return 'wds-icons-flag';
			} else {
				return 'wds-icons-upvote-small';
			}
		}),

		postTitleMarkup: computed('model.title', function () {
			return wrapMeHelper.compute([
				this.get('model.title')
			], {
				tagName: 'b',
			});
		}),

		showSnippet: computed('model.{title,type}', function () {
			// Old discussions posts without title
			return !this.get('model.title') && !this.isAnnouncement(this.get('model.type'));
		}),

		showLastActor: computed('model.type', function () {
			return this.isAnnouncement(this.get('model.type'));
		}),

		text: computed('model', function () {

			if (this.isAnnouncement(this.model.type)) {
				return this.model.snippet;
			} else {
				return null;
			}
		}),

		// Make sure to escape user input
		textWithHtml: computed('model', function () {
			const { type } = this.model;

			if (this.isDiscussionReply(type)) {
				return this.getReplyMessageBody(this.model);
			} else if (this.isDiscussionPostUpvote(type)) {
				return this.getPostUpvoteMessageBody(this.model);
			} else if (this.isDiscussionReplyUpvote(type)) {
				return this.getReplyUpvoteMessageBody(this.model);
			} else {
				return null;
			}
		}),

		showAvatars: computed('model.{totalUniqueActors,type}', function () {
			return this.get('model.totalUniqueActors') > 2 &&
				this.isDiscussionReply(this.get('model.type'));
		}),

		avatars: computed('model', function () {
			const avatars = [];
			const latestActors = this.get('model.latestActors') || [];

			latestActors.forEach((actor) => {
				avatars.push({
					src: actor.avatarUrl,
					link: this.wikiUrls.build({
						host: this.wikiVariables.host,
						namespace: 'User',
						title: actor.name
					})
				});
			});
			return avatars;
		}),

		didInsertElement() {
			const { type, isUnread } = this.model;

			this.track({
				action: 'impression',
				category: 'on-site-notifications',
				label: type,
				value: isUnread ? 1 : 0
			});
		},

		actions: {
			onNotificationClicked() {
				const { type, isUnread } = this.model;
				const wdsOnSiteNotifications = this.wdsOnSiteNotifications;

				this.track({
					action: 'click',
					category: 'on-site-notifications',
					label: type,
					value: isUnread ? 1 : 0
				});

				if (isUnread) {
					wdsOnSiteNotifications
						.markAsRead(this.model, true)
						.then(() => {
							wdsOnSiteNotifications.goToDestination(this.model);
						});
				} else {
					wdsOnSiteNotifications.goToDestination(this.model);
				}
			},

			markAsRead() {
				if (!this.model.get('isUnread')) {
					return;
				}

				this.track({
					action: 'click',
					category: 'on-site-notifications',
					label: `mark-as-read-${this.model.type}`
				});
				this.wdsOnSiteNotifications.markAsRead(this.model);
			}
		},

		isDiscussionReply(type) {
			return type === notificationTypes.discussionReply;
		},

		isDiscussionReplyUpvote(type) {
			return type === notificationTypes.discussionUpvoteReply;
		},

		isDiscussionPostUpvote(type) {
			return type === notificationTypes.discussionUpvotePost;
		},

		isAnnouncement(type) {
			return type === notificationTypes.announcement;
		},

		getPostUpvoteMessageBody(model) {
			const hasTitle = model.get('title');
			const totalUniqueActors = model.get('totalUniqueActors');
			const hasMultipleUsers = totalUniqueActors > 1;

			if (hasTitle) {
				if (hasMultipleUsers) {
					return this.getTranslatedMessage('notifications-post-upvote-multiple-users-with-title', {
						postTitle: this.postTitleMarkup,
						number: totalUniqueActors
					});
				} else {
					return this.getTranslatedMessage('notifications-post-upvote-single-user-with-title', {
						postTitle: this.postTitleMarkup,
					});
				}
			} else if (hasMultipleUsers) {
				return this.getTranslatedMessage('notifications-post-upvote-multiple-users-no-title', {
					number: totalUniqueActors
				});
			} else {
				return this.getTranslatedMessage('notifications-post-upvote-single-user-no-title');
			}
		},

		getReplyMessageBody(model) {
			const hasTitle = model.get('title');
			const totalUniqueActors = model.get('totalUniqueActors');
			const hasTwoUsers = totalUniqueActors === 2;
			const hasThreeOrMoreUsers = totalUniqueActors > 2;
			const firstReplierName = model.get('latestActors.0.name');

			if (hasTitle) {
				if (hasThreeOrMoreUsers) {
					return this.getTranslatedMessage('notifications-replied-by-multiple-users-with-title', {
						postTitle: this.postTitleMarkup,
						mostRecentUser: firstReplierName,
						number: totalUniqueActors - 1
					});
				} else if (hasTwoUsers) {
					return this.getTranslatedMessage('notifications-replied-by-two-users-with-title', {
						firstUser: firstReplierName,
						secondUser: model.get('latestActors.1.name'),
						postTitle: this.postTitleMarkup,
					});
				} else {
					return this.getTranslatedMessage('notifications-replied-by-with-title', {
						user: firstReplierName,
						postTitle: this.postTitleMarkup,
					});
				}
			} else if (hasThreeOrMoreUsers) {
				return this.getTranslatedMessage('notifications-replied-by-multiple-users-no-title', {
					username: this.usernameMarkup,
					mostRecentUser: firstReplierName,
					number: totalUniqueActors - 1
				});
			} else if (hasTwoUsers) {
				return this.getTranslatedMessage('notifications-replied-by-two-users-no-title', {
					firstUser: firstReplierName,
					secondUser: model.get('latestActors.1.name'),
				});
			} else {
				return this.getTranslatedMessage('notifications-replied-by-no-title', {
					user: firstReplierName,
				});
			}
		},

		getReplyUpvoteMessageBody(model) {
			const hasTitle = model.get('title');
			const totalUniqueActors = model.get('totalUniqueActors');
			const hasMultipleUsers = totalUniqueActors > 1;

			if (hasTitle) {
				if (hasMultipleUsers) {
					return this.getTranslatedMessage('notifications-reply-upvote-multiple-users-with-title', {
						postTitle: this.postTitleMarkup,
						number: totalUniqueActors - 1
					});
				} else {
					return this.getTranslatedMessage('notifications-reply-upvote-single-user-with-title', {
						postTitle: this.postTitleMarkup,
					});
				}
			} else if (hasMultipleUsers) {
				return this.getTranslatedMessage('notifications-reply-upvote-multiple-users-no-title', {
					number: totalUniqueActors
				});
			} else {
				return this.getTranslatedMessage('notifications-reply-upvote-single-user-no-title');
			}
		},

		getTranslatedMessage(key, context) {
			const fullContext = extend({}, {
				ns: 'design-system',
			}, context);

			return this.i18n.t(key, fullContext);
		},
	}
);
