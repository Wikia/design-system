/* eslint-env node */
'use strict';

module.exports = function (deployTarget) {
	let ENV = {
		build: {
			outputPath: 'docs-dev',
		},
		// include other plugin configuration that applies to all deploy targets here
	};

	if (deployTarget === 'devbox') {
		ENV.build.environment = 'devbox';

		ENV.sftp = {
			host: `dev-${process.env.USER}`,
			distDir: 'docs-dev',
			remoteDir: '/var/www/design-system/docs',
			remoteUser: process.env.USER,
			agent: process.env.SSH_AUTH_SOCK
		};
	}

	if (deployTarget === 'production') {
		ENV.build.environment = 'production';
		// configure other plugins for production deploy target here
	}

	// Note: if you need to build some configuration asynchronously, you can return
	// a promise that resolves with the ENV object instead of returning the
	// ENV object synchronously.
	return ENV;
};
