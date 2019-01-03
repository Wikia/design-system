import Component from '@ember/component';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { assert } from '@ember/debug';

const userRoleMap = {
	'sysop': 'admin',
	'threadmoderator': 'discussion-moderator',
};

export default Component.extend({
	i18n: service(),

	tagName: 'span',
	classNames: 'wds-avatar__badge',
	attributeBindings: ['title'],

	init() {
		this._super(...arguments);

		assert('@name is required', this.name);
	},

	badgeAssetName: computed('name', function() {
		return `wds-avatar-badges-${userRoleMap[this.name] || this.name}`;
	}),

	title: computed('name', function() {
		return this.i18n.t(`design-system:wds-avatar-badges-${userRoleMap[this.name] || this.name}-tooltip`);
	}),
});
