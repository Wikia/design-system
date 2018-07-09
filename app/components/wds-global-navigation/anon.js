import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { addQueryParams } from '../../utils/url';

export default Component.extend({
	fastboot: service(),

	tagName: '',

	signinUrl: computed('model.signin', 'fastboot.isFastBoot', function() {
		const params = {};

		params[this.get('model.signin.param-name')] = this.getRedirectUrl();

		return addQueryParams(this.get('model.signin.href'), params);
	}),

	registerUrl: computed('model.register', 'fastboot.isFastBoot', function() {
		const params = {};

		params[this.get('model.register.param-name')] = this.getRedirectUrl();

		return addQueryParams(this.get('model.register.href'), params);
	}),

	getRedirectUrl() {
		if (this.get('fastboot.isFastBoot')) {
			return `${this.get('fastboot.request.protocol')}//${this.get('fastboot.request.host')}${this.get('fastboot.request.path')}`;
		} else {
			return window.location.href;
		}
	}
});
