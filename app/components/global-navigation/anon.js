import Component from '@ember/component';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import { addQueryParams } from '@wikia/ember-fandom/utils/url';

export default Component.extend({
	fastboot: service(),
	router: service(),

	tagName: '',

	signinUrl: computed('model.signin', 'redirectUrl', function() {
		const params = {};

		params[this.get('model.signin.param-name')] = this.redirectUrl;

		return addQueryParams(this.get('model.signin.href'), params);
	}),

	registerUrl: computed('model.register', 'redirectUrl', function() {
		const params = {};

		params[this.get('model.register.param-name')] = this.redirectUrl;

		return addQueryParams(this.get('model.register.href'), params);
	}),

	redirectUrl: computed('fastboot.isFastBoot', 'router.currentURL', function() {
		if (this.get('fastboot.isFastBoot')) {
			return `${this.get('fastboot.request.protocol')}//${this.get('fastboot.request.host')}${this.get('fastboot.request.path')}`;
		} else {
			return window.location.href;
		}
	}),
});
