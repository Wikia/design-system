/*jshint node:true*/
'use strict';

var fs = require('fs-extra'),
	glob = require('glob'),
	path = require('path');

module.exports = {
	name: 'post-build-copy',

	postBuild: function (results) {
		var config = this.app.options.postBuildCopy;

		for (var i = 0; i < config.length; i++) {
			var src = glob.sync(results.directory + config[i].src),
				dest = config[i].dest,
				enabled = config[i].enabled;

			if (enabled === false) {
				return;
			}

			if (src.length === 0) {
				console.warn('post-build-copy: No files found for glob ' + results.directory + config[i].src);
			}

			src.forEach(function (file) {
				/**
				 * Support destination in two forms:
				 * - `/dir/` for multiple files
				 * - `/dir/filename` for single files
 				 */
				var destIsDir = dest.slice(-1) === '/',
					dir = destIsDir ? dest : path.parse(dest).dir,
					fileName = destIsDir ? path.parse(file).base : path.parse(dest).base,
					fullSrc = path.resolve(file),
					fullDest = path.resolve(dir + '/' + fileName);

				try {
					fs.copySync(fullSrc, fullDest);
				} catch (e) {
					console.error('post-build-copy: Could not copy from ' + fullSrc + ' to ' + fullDest);
				}
			});
		}
	},

	isDevelopingAddon: function () {
		return true;
	}
};
