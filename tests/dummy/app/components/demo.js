import Component from '@ember/component';
import ENV from '../config/environment';
import beautify from '../utils/beautify';

/**
 * This components supports 3 different ways to render a component demo
 *
 * Showcase template, rendered HTML and rendered component
 * <Demo @name='unique-name'>
 * 	some code to demo
 * </Demo>
 *
 * Showcase template and rendered HTML but don't show rendered component
 * <Demo @name='unique-name-2' @codeOnly={{true}}>
 *  other code to demo
 * </Demo>
 * under the hood it uses ember-code-snippet addont to get a snippet of code
 * it uses clever way of searching through code for special markers
 * that we have configured to be
 * 	begin: /<Demo[^}]+@name='(\S+)'/,
 * 	end: /<\/Demo>/,
 * This allows us to do easy component demos
 * but it does not support multiline regexps, make sure whole component-demo invocation is on one line
 *
 * Showcase rendered HTML only
 * <Demo @codeOnly={{true}}>
 *  other code to demo
 * </Demo>
 */
export default Component.extend({
	classNames: ['component-demo'],

	// rendered code to demo
	renderedComponent: '',
	codeOnly: false,
	rootURL: ENV.rootURL,
	standalone: false,
	standaloneDevice: null,
	/**
	 * name of a demo e.g. name='unique-name-of-a-demo'
	 * This have to be globally unique name
	*/
	name: null,
	showHTML: false,
	showHBS: true,
	language: 'htmlbars',


	didInsertElement() {
		this.toggleView(this.name);

		if (!['html', 'scss', 'js'].includes(this.language)) {
			const component = this.element.querySelector('.component-demo__rendered').cloneNode(true);
			const emberView = component.querySelector('.ember-view');

			if (emberView) {
				emberView.removeAttribute('id');
				emberView.classList.remove('ember-view');
			}

			this.set('renderedCode', beautify(component.outerHTML));
		}
	},

	click(event) {
		if (event.target.classList.contains('component-demo__fullscreen')) {
			this.send('closeFullscreen');
		}
	},

	actions: {
		closeFullscreen() {
			this.set('standaloneDevice', null);
		},
		showFullscreen(device) {
			this.set('standaloneDevice', device);
		},
		onTabChange(tab) {
			const isHBS = tab.element.innerText.includes('HBS');

			this.toggleView(isHBS);
		}
	},

	toggleView(showHBS) {
		this.set('showHBS', showHBS);
		this.set('showHTML', !showHBS);
	}
});
