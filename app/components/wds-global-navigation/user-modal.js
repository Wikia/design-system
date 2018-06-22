import {inject as service} from '@ember/service';
import Component from '@ember/component';

export default Component.extend({
	classNames: ['wds-global-navigation__modal', 'wds-user-modal'],
	notifications: service(),

	didInsertElement() {
        this._super(...arguments);

		this.get('notifications').loadFirstPage();
	}
});
