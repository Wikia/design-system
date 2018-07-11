import Component from '@ember/component';
import { computed } from '@ember/object';
import { or } from '@ember/object/computed';

export default Component.extend({
	tagName: '',

	defaultHref: '#',

	stickedClassName: computed('item', 'currentIndex', function () {
		return (this.get('item.items.length') < this.get('currentIndex') + 1) ? 'wds-is-sticked-to-parent' : '';
	}),

	href: or('model.href', 'defaultHref')
});
