import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({
	tagName: '',

	stickedClassName: computed('item', 'currentIndex', function () {
		return (this.get('item.items.length') < this.get('currentIndex') + 1) ? 'wds-is-sticked-to-parent' : '';
	}),

	itemHref: computed('item.href', function () {
		return this.item.href || '#';
	})
});
