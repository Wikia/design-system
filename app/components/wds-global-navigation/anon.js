import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import addQueryParams from '../../utils/url';

export default Component.extend({
	fastboot: service(),

	tagName: '',

	signinUrl: computed('model.signin', 'fastboot.isFastBoot', function() {
		return `${this.get('model.signin.href')}?${this.get('model.register.param-name')}=${this.getRedirectUrl()}`
	}),

	registerUrl: computed('model.register', 'fastboot.isFastBoot', function() {
		// TODO: use addQueryParameters from url util (how to import?)
		return `${this.get('model.register.href')}?${this.get('model.register.param-name')}=${this.getRedirectUrl()}`
	}),

	getRedirectUrl() {
		if (this.get('fastboot.isFastBoot')) {
			return encodeURIComponent(`${this.get('fastboot.request.protocol')}//${this.get('fastboot.request.host')}${this.get('fastboot.request.path')}`);
		} else {
			return encodeURIComponent(window.location.href);
		}
	}
});
