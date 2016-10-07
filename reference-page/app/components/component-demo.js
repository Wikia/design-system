import Ember from 'ember';

const {Component} = Ember;

export default Component.extend({
	classNames: ['component-demo'],

	allowFullscreen: false,
	codeOnly: false,
	isInFullscreen: false,

	didInsertElement() {
		const $component = this.$('.component-demo__rendered').clone();
		$component.children().removeAttr('id').removeClass('ember-view');

		this.set('code', $component.html());
	},

	actions: {
		closeFullscreen() {
			this.set('isInFullscreen', false);
		},
		showFullscreen() {
			this.set('isInFullscreen', true);
		}
	}
});
