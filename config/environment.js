/* jshint node: true */

module.exports = function (environment) {
	var ENV = {
		modulePrefix: 'design-system',
		environment: environment,
		rootURL: '/',
		locationType: 'hash',
		EmberENV: {
			FEATURES: {}
		},
		APP: {}
	};

	if (environment === 'test') {
		// Testem prefers this...
		ENV.locationType = 'none';

		// keep test console output quieter
		ENV.APP.LOG_ACTIVE_GENERATION = false;
		ENV.APP.LOG_VIEW_LOOKUPS = false;

		ENV.APP.rootElement = '#ember-testing';
	}

	if (environment === 'devbox') {
		ENV.rootURL = '/design-system/';
	}

	return ENV;
};
