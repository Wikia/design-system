import Component from '@ember/component';
import { alias } from '@ember/object/computed'
export default Component.extend({
	attributeBindings: ['id'],
	id: alias('model.title.key'),
});
