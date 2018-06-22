import {notEmpty, empty} from '@ember/object/computed';
import Component from '@ember/component';
import EmberObject from '@ember/object';
import fetch from 'fetch';
import {run} from '@ember/runloop';
import wrapMeHelper from '../../helpers/wrap-me';
import {inject as service} from '@ember/service';

export default Component.extend({

	actions: {
		openModal(modalType) {
			this.get('openModal')(modalType);
		},

		deactivateSearch() {

		}
	}
});
