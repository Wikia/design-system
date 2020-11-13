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

			switch (type) {
				case notificationTypes.discussionReply:
				case notificationTypes.postAtMention:
				case notificationTypes.threadAtMention:
				case notificationTypes.messageWallPost:
				case notificationTypes.messageWallReply:
					return 'wds-icons-comment-small';
				case notificationTypes.announcement:
					return 'wds-icons-flag-small';
				case notificationTypes.articleCommentReply:
					return 'wds-icons-reply-small';
				case notificationTypes.articleCommentAtMention:
				case notificationTypes.articleCommentReplyAtMention:
					return 'wds-icons-mention-small';
				case notificationTypes.talkPageMessage:
					return 'wds-icons-bubble-small';
				default:
					return 'wds-icons-heart-small';
			}
		}),

		titleMarkup: computed('model.title', function () {
			return wrapMeHelper.compute([
				this.get('model.title')
			], {
				tagName: 'b',
			});
		}),

		showSnippet: computed('model.{title,type}', function () {
			// Old discussions posts without title
			return !this.get('model.title') && this.get('model.type') !== notificationTypes.announcement;
		}),

		showLastActor: computed('model.type', function () {
			return this.get('model.type') === notificationTypes.announcement;
		}),

		text: computed('model', function () {
			if (this.model.type === notificationTypes.announcement) {
				return this.model.snippet;
			}

			return null;
		}),

		// Make sure to escape user input
		textWithHtml: computed('model', function () {
			const { type } = this.model;

			switch (type) {
				case notificationTypes.discussionReply:
					return this.getReplyMessageBody(this.model);
				case notificationTypes.discussionUpvotePost:
					return this.getPostUpvoteMessageBody(this.model);
				case notificationTypes.discussionUpvoteReply:
					return this.getReplyUpvoteMessageBody(this.model);
				case notificationTypes.postAtMention:
					return this.getPostAtMentionMessageBody(this.model);
				case notificationTypes.threadAtMention:
					return this.getThreadAtMentionMessageBody(this.model);
				case notificationTypes.articleCommentReply:
					return this.getArticleCommentReplyMessageBody(this.model);
				case notificationTypes.articleCommentAtMention:
					return this.getArticleCommentAtMentionMessageBody(this.model);
				case notificationTypes.articleCommentReplyAtMention:
					return this.getArticleCommentReplyAtMentionMessageBody(this.model);
				case notificationTypes.messageWallPost:
					return this.getMessageWallPostBody(this.model);
				case notificationTypes.messageWallReply:
					return this.getMessageWallReplyBody(this.model);
				case notificationTypes.messageWallPostRemoved:
					return this.getMessageWallPostRemovedBody(this.model);
				case notificationTypes.talkPageMessage:
					return this.getTalkPageMessageBody(this.model);
				default:
					return null;
			}
		}),

		showAvatars: computed('model.{totalUniqueActors,type}', function () {
			return this.get('model.totalUniqueActors') > 2 &&
				this.get('model.type') === notificationTypes.discussionReply;
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

		getPostUpvoteMessageBody(model) {
			const hasTitle = model.get('title');
			const totalUniqueActors = model.get('totalUniqueActors');
			const hasMultipleUsers = totalUniqueActors > 1;

			if (hasTitle) {
				if (hasMultipleUsers) {
					return this.getTranslatedMessage('notifications-post-upvote-multiple-users-with-title', {
						postTitle: this.titleMarkup,
						number: totalUniqueActors
					});
				} else {
					return this.getTranslatedMessage('notifications-post-upvote-single-user-with-title', {
						postTitle: this.titleMarkup,
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
						postTitle: this.titleMarkup,
						mostRecentUser: firstReplierName,
						number: totalUniqueActors - 1
					});
				} else if (hasTwoUsers) {
					return this.getTranslatedMessage('notifications-replied-by-two-users-with-title', {
						firstUser: firstReplierName,
						secondUser: model.get('latestActors.1.name'),
						postTitle: this.titleMarkup,
					});
				} else {
					return this.getTranslatedMessage('notifications-replied-by-with-title', {
						user: firstReplierName,
						postTitle: this.titleMarkup,
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
						postTitle: this.titleMarkup,
						number: totalUniqueActors - 1
					});
				} else {
					return this.getTranslatedMessage('notifications-reply-upvote-single-user-with-title', {
						postTitle: this.titleMarkup,
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

		getPostAtMentionMessageBody(model) {
			return this.getTranslatedMessage('notifications-reply-at-mention', {
				postTitle: this.titleMarkup,
				mentioner: model.get('latestActors.0.name')
			});
		},

		getThreadAtMentionMessageBody(model) {
			return this.getTranslatedMessage('notifications-post-at-mention', {
				postTitle: this.titleMarkup,
				mentioner: model.get('latestActors.0.name')
			});
		},

		getArticleCommentReplyMessageBody(model) {
			const currentUserId = this.wdsOnSiteNotifications.currentUser.userId;
			const messageKey = model.get('refersToAuthorId') === currentUserId
				? 'notifications-article-comment-reply-own-comment'
				: 'notifications-article-comment-reply-followed-comment';

			return this.getTranslatedMessage(messageKey, {
				user: model.get('latestActors.0.name') || this.getTranslatedMessage('notifications-anon-user'),
				articleTitle: this.titleMarkup,
			});
		},

		getArticleCommentAtMentionMessageBody(model) {
			return this.getTranslatedMessage('notifications-article-comment-comment-mention', {
				user: model.get('latestActors.0.name') || this.getTranslatedMessage('notifications-anon-user'),
				articleTitle: this.titleMarkup,
			});
		},

		getArticleCommentReplyAtMentionMessageBody(model) {
			return this.getTranslatedMessage('notifications-article-comment-reply-mention', {
				user: model.get('latestActors.0.name') || this.getTranslatedMessage('notifications-anon-user'),
				articleTitle: this.titleMarkup,
			});
		},

		getMessageWallPostBody(model) {
			let wallOwner = model.get('metadata.wallOwnerName');
			const currentUsername = this.wdsOnSiteNotifications.currentUser.name;

			if (!wallOwner) {
				wallOwner = this.getMessageWallOwner(model.get('uri'));
			}

			const isOwnWall = wallOwner === currentUsername;
			const args = {
				postTitle: model.get('title'),
				wallOwner,
			};

			if (isOwnWall) {
				args.user = this.getPossiblyAnonActorName(model);
				return this.getTranslatedMessage('notifications-own-wall-post', args);
			}

			args.firstUser = this.getPossiblyAnonActorName(model);
			return this.getTranslatedMessage('notifications-wall-post', args);
		},

		getMessageWallReplyBody(model) {
			let wallOwner = model.get('metadata.wallOwnerName');
			const currentUsername = this.wdsOnSiteNotifications.currentUser.name;

			if (!wallOwner) {
				wallOwner = this.getMessageWallOwner(model.get('uri'));
			}

			const isOwnWall = wallOwner === currentUsername;
			const args = {
				postTitle: model.get('title'),
				wallOwner,
			};

			if (model.get('totalUniqueActors') > 1) {
				args.number = model.get('totalUniqueActors') - 1;

				if (isOwnWall) {
					args.user = this.getPossiblyAnonActorName(model);
					return this.getTranslatedMessage('notifications-own-wall-reply-multiple-users', args);
				}
		
				args.firstUser = this.getPossiblyAnonActorName(model);

				if (model.get('contentCreatorName') === currentUsername) {
					return this.getTranslatedMessage('notifications-wall-reply-multiple-users-own-message', args);
				}

				args.secondUser = model.get('contentCreatorName') || this.getTranslatedMessage('notifications-anon-user');
				return this.getTranslatedMessage('notifications-wall-reply-multiple-users', args);
			}

			if (isOwnWall) {
				args.user = this.getPossiblyAnonActorName(model);
				return this.getTranslatedMessage('notifications-own-wall-reply', args);
			}

			if (model.get('contentCreatorName') === currentUsername) {
				args.user = this.getPossiblyAnonActorName(model);
				return this.getTranslatedMessage('notifications-wall-reply-own-message', args);
			}

			args.firstUser = this.getPossiblyAnonActorName(model);
			args.secondUser = model.get('contentCreatorName') || this.getTranslatedMessage('notifications-anon-user');

			return this.getTranslatedMessage('notifications-wall-reply', args);
		},

		getMessageWallPostRemovedBody(model) {
			return this.getTranslatedMessage('notifications-own-wall-post-removed', {
				postTitle: model.get('title'),
			});
		},

		getTalkPageMessageBody(model) {
			const userName = this.getPossiblyAnonActorName(model);
			const args = {
				user: userName,
			};

			return this.getTranslatedMessage('notifications-talk-page-message', args);
		},

		getMessageWallOwner(url) {
			const regex = /\/Message_Wall:(.+?)([?#/].*)?$/i;
			const result = regex.exec(url);

			if (!result || !result[1]) {
				return null;
			}

			return result[1];
		},

		getPossiblyAnonActorName(model) {
			return model.get('latestActors.0.name') ? model.get('latestActors.0.name') : this.getTranslatedMessage('notifications-anon-user');
		},

		getTranslatedMessage(key, context) {
			const fullContext = extend({}, {
				ns: 'design-system',
			}, context);

			return this.i18n.t(key, fullContext);
		},
	}
);
