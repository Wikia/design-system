import Component from '@ember/component';
import {computed} from '@ember/object';

export default Component.extend({
	tagName: 'svg',
	classNames: ['wds-icon'],
	classNameBindings: ['sizeClassName', 'chevron:wds-menu-chevron'],
	attributeBindings: ['width', 'height'],

	sizeClassName: computed('size', function () {
		const size = this.get('size');

		return size ? `wds-icon-${size}` : '';
	}),

	iconName: computed('name', 'size', function () {
		const name = this.get('name');
		const size = this.get('size');

		return `wds-icons-${name}${size ? `-${size}` : ''}`;
	})
});
