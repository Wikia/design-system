import Component from '@ember/component';

export default Component.extend({
	language: 'html',

	didInsertElement() {
		const code = this.element.querySelector('pre');

		hljs.highlightBlock(code);
	}
});
