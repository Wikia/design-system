import Component from '@ember/component';
import { computed } from '@ember/object';
import { assert } from '@ember/debug';

export default Component.extend({
	classNames: ['wds-avatar-stack'],
	maxStackSize: 5,
	avatars: null,
	hideOverflow: false,
	overrideCount: null,

	init() {
		this._super(...arguments);

		assert('@avatars are required', this.avatars instanceof Array);
	},

	count: computed('avatars', 'overrideCount', function() {
		return this.overrideCount || this.avatars.length || 0;
	}),

	overflow: computed('count', 'hideOverflow', 'maxStackSize', function() {
		return !this.hideOverflow && this.count > this.maxStackSize
			? this.count - this.maxStackSize
			: 0;
	}),

	displayableAvatars: computed(
		'avatars',
		'count',
		'maxStackSize',
		function() {
			return this.count > this.maxStackSize
				? this.avatars.slice(0, this.maxStackSize)
				: this.avatars;
		},
	),
});
