import Component from '@ember/component';
import { readOnly } from '@ember/object/computed';

export default Component.extend({
	tagName: 'a',
	classNames: ['wds-content-recommendations__card'],
	attributeBindings: ['href'],
	href: readOnly('model.url'),
});
