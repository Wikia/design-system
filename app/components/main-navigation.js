import Ember from 'ember';

const {Component, run} = Ember;

export default Component.extend({
	classNames: 'main-navigation',
	classNameBindings: ['isFixed'],
	tagName: 'nav',

	offset: 0,

	didInsertElement() {
		this.set('offset', this.$().offset().top || 0);

		run.schedule('afterRender', () => {
			$(window).on('scroll', () => {
				this.set('isFixed', this.get('offset') < window.pageYOffset);
			});
		});
	}
});
