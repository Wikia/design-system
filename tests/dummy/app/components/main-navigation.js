import Component from '@ember/component';
import { run, throttle } from '@ember/runloop';

export default Component.extend({
	classNames: 'main-navigation',
	classNameBindings: ['isFixed'],
	tagName: 'nav',

	offset: 0,

	didInsertElement() {
		this.set('offset', this.element.getBoundingClientRect().top + document.body.scrollTop || 0);

		run.schedule('afterRender', () => {
			window.addEventListener('scroll', () => {
				throttle(this, function () {
					if(!this.isDestroyed) {
						this.set('isFixed', this.offset < window.pageYOffset);
					}
				}, 100);
			});
		});
	}
});
