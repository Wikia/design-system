import Ember from 'ember';

export default Ember.Component.extend({
	didInsertElement() {
		const $component = this.$('.rendered').clone();
		$component.children().removeAttr('id').removeClass('ember-view');

		this.set('code', $component.html());
	}
});
