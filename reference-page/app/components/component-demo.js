import Ember from 'ember';

const {Component} = Ember;

export default Component.extend({
	classNames: ['component-demo'],

	codeOnly: false,
	standalone: false,
	standaloneDevice: null,

	didInsertElement() {
		const $component = this.$('.component-demo__rendered').clone();
		$component.children().removeAttr('id').removeClass('ember-view');

		this.set('code', $component.html());
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
