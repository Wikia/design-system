/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
	var app = new EmberApp(defaults, {
		// Styles can be previewed at https://highlightjs.org/static/demo/
		// They are stored in ./node_modules/ember-cli-eg-code-highlight/vendor-addon/highlightjs/styles/
		egCodeHighlight: {
			style: 'github'
		},
		inlineSvgSprites: [
			'../dist/svg/sprite-avatar-badges.svg',
			'../dist/svg/sprite-company.svg',
			'../dist/svg/sprite-icons.svg'
		],
		sassOptions: {
			includePaths: [
				'../dist'
			]
		}
	});

	// Use `app.import` to add additional libraries to the generated
	// output files.
	//
	// If you need to use different assets in different
	// environments, specify an object as the first parameter. That
	// object's keys should be the environment name and the values
	// should be the asset to use in that environment.
	//
	// If the library that you are including contains AMD or ES6
	// modules that you would like to import into your application
	// please specify an object with the list of modules as keys
	// along with the exports of each module as its value.

	return app.toTree();
};
