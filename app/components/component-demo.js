import Component from '@ember/component';
import ENV from '../config/environment';
import beautify from '../utils/beautify';

export default Component.extend({
	classNames: ['component-demo'],

	code: '',
	codeOnly: false,
	rootURL: ENV.rootURL,
	standalone: false,
	standaloneDevice: null,

	didInsertElement() {
		const $component = this.$('.component-demo__rendered').clone();

		$component.find('.ember-view').removeAttr('id').removeClass('ember-view');

		this.set('code', beautify($component.html()));
	},

	click(event) {
		if (event.target.classList.contains('component-demo__fullscreen')) {
			this.send('closeFullscreen');
		}
	},

	actions: {
		closeFullscreen() {
			this.set('standaloneDevice', null);
		},
		showFullscreen(device) {
			this.set('standaloneDevice', device);
		}
	}
});
