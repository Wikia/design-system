import Component from '@ember/component';

export default Component.extend({
	classNameBindings: ['language'],
	language: 'html',
	tagName: 'pre',

	didInsertElement() {
		hljs.highlightBlock(this.element);
	}
});
