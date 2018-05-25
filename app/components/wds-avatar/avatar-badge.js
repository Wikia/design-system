import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({
	tagName: 'span',
	classNames: 'wds-avatar__badge',
	attributeBindings: ['title'],
	name: null,
	translateFunc: null,

	badgeAssetName: computed('name', function() {
		const name = this.get('name');

		return name ? `wds-avatar-badges-${name}` : null;
	}),

	title: computed('name', function() {
		const name = this.get('name');

		return name ? this.get('translateFunc')(`wds-avatar-badges-${name}-tooltip`) : '';
	}),
});
