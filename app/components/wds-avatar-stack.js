import Component from '@ember/component';
import {computed} from '@ember/object';


export default Component.extend({
	classNames: ['wds-avatar-stack'],
	overflow: computed('avatars', function() {
		const count = this.get('avatars').length;

		return count > 5 ? this.get('avatars').length - 5 : 0;
	}),
	displayableAvatars: computed('avatars', function() {
		return this.get('avatars').slice(5);
	}),
});
