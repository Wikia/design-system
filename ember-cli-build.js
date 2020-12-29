'use strict';

const EmberAddon = require('ember-cli/lib/broccoli/ember-addon');
const Funnel = require('broccoli-funnel');

module.exports = function(defaults) {
	const inlineScriptsPath = 'vendor/inline-scripts';
	var app = new EmberAddon(defaults, {
		autoprefixer: {
			cascade: false,
			map: false,
			remove: false
		},
		fingerprint: {
			enabled: false
		},
		inlineContent: {
			'tracking-queue-stub': `${inlineScriptsPath}/tracking-queue-stub.js`,
		},
		snippetPaths: ['tests/dummy/snippets'],
		snippetSearchPaths: ['tests/dummy/app'],
		snippetRegexes: {
			begin: /<Demo[^}]+@name="(\S+)"/,
			end: /<\/Demo>/,
		},
		includeFileExtensionInSnippetNames: false,
		includeHighlightStyle: false,
		includeHighlightJS: false,
		outputPaths: {
			app: {
				css: {
					'app': '/assets/design-system.css',
				}
			}
		},
		sassOptions: {
			includePaths: [
				'style-guide/styles',
				'node_modules/highlight.js/styles'
			]
		},
		vendorFiles: { 'jquery.js': null }
	});

	var additionalTrees = [];

	// Copy already built SVG files from dist directory
	additionalTrees.push(new Funnel('dist/svg', {
		include: ['*.svg'],
		destDir: '/svg'
	}));

	additionalTrees.push(new Funnel('i18n', {
		include: ['**/*.json'],
		destDir: 'assets/i18n'
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
