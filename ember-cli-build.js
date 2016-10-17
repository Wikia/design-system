/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app'),
	Funnel = require('broccoli-funnel'),
	Symbolizer = require('broccoli-symbolizer');

module.exports = function(defaults) {
	var app = new EmberApp(defaults, {
		autoprefixer: {
			browsers: ['last 4 versions'],
			cascade: false
		},
		fingerprint: {
			enabled: false
		},
		nodeAssets: {
			'highlight.js': {
				import: ['lib/highlight.js']
			}
		},
		outputPaths: {
			app: {
				css: {
					'app': '/assets/design-system.css',
					// This one is copied after build to /dist for use by other apps, see postBuildCopy below
					'wds': '/assets/wds.css'
				}
			}
		},
		postBuildCopy: [
			{
				src: '/assets/wds.css',
				dest: 'dist/guidelines/css/styles.css',
				enabled: EmberApp.env() === 'production'
			},
			{
				src: '/svg/*.svg',
				dest: 'dist/guidelines/svg/',
				enabled: EmberApp.env() === 'production'
			}
		],
		sassOptions: {
			includePaths: [
				'guidelines/styles'
			]
		}
	});

	var additionalTrees = [];

	if (app.env === 'production') {
		// We build separate SVG files just for the /dist
		// Don't waste resources during development
		additionalTrees.push(new Funnel('guidelines/assets', {
			include: ['*.svg'],
			destDir: 'svg'
		}));
	}

	additionalTrees.push(new Symbolizer('guidelines/assets', {
		outputFile: '/svg/sprite.svg'
	}));

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

	return app.toTree(additionalTrees);
};
