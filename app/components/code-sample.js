import Ember from 'ember';
import {registerHljsLanguage} from '../utils/beautify';

const {Component, run} = Ember;

export default Component.extend({
	language: 'html',

	didInsertElement() {
		const $code = this.$('code').get(0);

		registerHljsLanguage();

		// Wait for components/component-demo to beautify the HTML
		run.schedule('afterRender', () => {
			hljs.highlightBlock($code);
		})
	}
});
