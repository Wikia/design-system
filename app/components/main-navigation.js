import Component from '@ember/component';
import {run} from '@ember/runloop';
import $ from 'jquery';

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
