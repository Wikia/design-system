import Component from '@ember/component';
import { computed } from '@ember/object';

export default Component.extend({
	classNames: ['wds-avatar-stack'],
	maxStackSize: 5,
	avatars: null,
	overrideCount: null,

	count: computed('avatars', 'overrideCount', function () {
		return this.overrideCount || this.get('avatars.length') || 0;
	}),

	overflow: computed('avatars', function () {
		const count = this.get('count');
		const maxStackSize = this.get('maxStackSize');

		return count > maxStackSize ? count - maxStackSize : 0;
	}),

	displayableAvatars: computed('avatars', 'maxStackSize', function () {
		const avatars = this.get('avatars') || [];
		const count = this.get('count');
		const maxStackSize = this.get('maxStackSize');

		return count > maxStackSize ? avatars.slice(0, maxStackSize) : avatars;
	}),
});
