/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app'),
	Funnel = require('broccoli-funnel'),
	SvgStore = require('broccoli-svgstore');

module.exports = function(defaults) {
	var app = new EmberApp(defaults, {
		autoprefixer: {
			browsers: ['last 5 versions'],
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
				dest: 'dist/css/styles.css',
				enabled: EmberApp.env() === 'production'
			},
			{
				src: '/svg/*.svg',
				dest: 'dist/svg/',
				enabled: EmberApp.env() === 'production'
			}
		],
		sassOptions: {
			includePaths: [
				'style-guide/styles'
			]
		}
	});

	var additionalTrees = [];

	if (app.env === 'production') {
		// We build separate SVG files just for the /dist
		// Don't waste resources during development
		additionalTrees.push(new Funnel('style-guide/assets', {
			include: ['*.svg'],
			destDir: 'svg'
		}));
	}


	additionalTrees.push(SvgStore('style-guide/assets', {
		outputFile: '/svg/sprite.svg',
		svgstoreOpts: {
			inline: true,
			svgAttrs: {
				style: 'position: absolute; width: 0; height: 0;',
				width: '0',
				height: '0',
				version: '1.1',
				xmlns: 'http://www.w3.org/2000/svg',
				'xmlns:xlink': 'http://www.w3.org/1999/xlink'
			}
		}
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
