import Component from '@ember/component';
import {computed} from '@ember/object';
import {htmlSafe} from '@ember/string';

export default Component.extend({
	attributeBindings: ['style'],
	classNames: 'wds-community-header',
	tagName: 'header',

	style: computed('model.background_image', function () {
		const backgroundImage = this.get('model.background_image');

		if (backgroundImage) {
			return htmlSafe(`background-image: url('${backgroundImage}');`);
		} else {
			return htmlSafe('');
		}
	}),
});
