import notificationTypes from 'dummy/utils/notification-types';
import { module, test } from 'qunit';

module('Unit | Utility | notification-types', function() {
	test('defines notification types', function(assert) {
		assert.equal(notificationTypes.discussionUpvotePost, 'discussion-upvote-post');
		assert.equal(notificationTypes.discussionUpvoteReply, 'discussion-upvote-reply');
		assert.equal(notificationTypes.discussionReply, 'discussion-reply');
		assert.equal(notificationTypes.postAtMention, 'post-at-mention');
		assert.equal(notificationTypes.threadAtMention, 'thread-at-mention');
	});
});
