import Component from '@ember/component';
import {run, throttle} from '@ember/runloop';

export default Component.extend({
	classNames: 'main-navigation',
	classNameBindings: ['isFixed'],
	tagName: 'nav',

	offset: 0,

	didInsertElement() {
		this.set('offset', this.$().offset().top || 0);

		run.schedule('afterRender', () => {
			window.addEventListener('scroll', () => {
				throttle(this, function () {
					this.set('isFixed', this.get('offset') < window.pageYOffset);
				}, 100);
			});
		});
	}
});
