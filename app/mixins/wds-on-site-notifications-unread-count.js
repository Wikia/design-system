import { gt } from '@ember/object/computed';
import Mixin from '@ember/object/mixin';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Mixin.create({
	wdsOnSiteNotifications: service(),

	unreadCount: computed('wdsOnSiteNotifications.model.unreadCount', function () {
		const count = this.get('wdsOnSiteNotifications.model.unreadCount');
		return count > 99 ?  '99+' : count;
	}),
	hasUnread: gt('wdsOnSiteNotifications.model.unreadCount', 0),
});
