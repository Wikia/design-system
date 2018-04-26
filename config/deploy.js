/* eslint-env node */
'use strict';

module.exports = function (deployTarget) {
	const distDir = 'docs-dev';

	let ENV = {
		build: {
			outputPath: distDir,
		},
		plugins: ['build']
		// include other plugin configuration that applies to all deploy targets here
	};

	if (deployTarget.startsWith('dev-')) {
		ENV.build.environment = 'devbox';
		ENV.plugins.push('sftp');

		ENV.sftp = {
			host: deployTarget,
			distDir: distDir,
			remoteDir: '/var/www/design-system',
			remoteUser: deployTarget.replace('dev-', ''),
			agent: process.env.SSH_AUTH_SOCK
		};
	}

	if (deployTarget === 'github') {
		ENV.build.environment = 'production';
		ENV.plugins.push('git');

		ENV.git = {
			repo: 'git@github.com:wikia/design-system.git',
			branch: 'gh-pages',
			commitMessage: 'Deployed %@'
		};
	}

	// Note: if you need to build some configuration asynchronously, you can return
	// a promise that resolves with the ENV object instead of returning the
	// ENV object synchronously.
	return ENV;
};
