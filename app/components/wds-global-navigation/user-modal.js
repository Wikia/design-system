import {inject as service} from '@ember/service';
import Component from '@ember/component';
import {observer} from '@ember/object';

export default Component.extend({
	classNames: ['wds-global-navigation__modal', 'wds-user-modal'],
	classNameBindings: ['isOpen::wds-is-hidden'],

	notifications: service(),

	openCloseObserver: observer('isOpen', function() {
		if (this.get('isOpen')) {
			this.track({
				label: 'open-menu',
				category: 'on-site-notifications',
				action: 'click',
				value: this.get('notifications').getUnreadCount()
			});

			this.get('notifications').loadFirstPage();
		}

	})
});