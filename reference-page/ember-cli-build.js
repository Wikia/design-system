/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app'),
	Funnel = require('broccoli-funnel');

module.exports = function(defaults) {
	var app = new EmberApp(defaults, {
		inlineSvgSprites: [
			'dist/svg/sprite.svg'
		],
		svgstore: {
			files: {
				sourceDirs: '../assets/',
				outputFile: '/svg/sprite.svg'
			}
		},
		nodeAssets: {
			'highlight.js': {
				import: ['lib/highlight.js']
			}
		},
		sassOptions: {
			includePaths: [
				'../dist'
			]
		}
	});

	var svgAssets = new Funnel('../assets', {
		include: ['*.svg'],
		destDir: 'svg'
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

	return app.toTree(svgAssets);
};
