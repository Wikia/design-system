import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
	classNames: ['wds-avatar-stack'],
	maxStackSize: 5,
	avatars: null,
	hideOverflow: false,
	overrideCount: null,

	count: computed('avatars', 'overrideCount', function () {
		return this.overrideCount || this.get('avatars.length') || 0;
	}),

	overflow: computed('count', 'hideOverflow', 'maxStackSize', function () {
		return !this.hideOverflow && this.count > this.maxStackSize ?
			this.count - this.maxStackSize :
			0;
	}),

	displayableAvatars: computed('avatars', 'count', 'maxStackSize', function () {
		const avatars = this.avatars || [];

		return this.count > this.maxStackSize ? avatars.slice(0, this.maxStackSize) : avatars;
	}),
});
