import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
	tagName: '',
	signinUrl: computed('model', function() {
		const signin = this.get('model.signin');

		return this.getFullUrl(signin);
	}),
	registerUrl: computed('model', function() {
		const register = this.get('model.register');

		return this.getFullUrl(register);
	}),

	getFullUrl(link) {
		return `${link.href}?${link['param-name']}=${encodeURIComponent(window.location.href)}`;
	}
});
