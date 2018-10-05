import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';

export default Component.extend({
	i18n: service(),

	tagName: 'span',
	classNames: 'wds-avatar__badge',
	attributeBindings: ['title'],
	name: null,

	badgeAssetName: computed('name', function() {
		return this.name ? `wds-avatar-badges-${this.name}` : null;
	}),

	title: computed('name', function() {
		return this.name ? this.i18n.t(`design-system:wds-avatar-badges-${this.name}-tooltip`) : '';
	}),
});
