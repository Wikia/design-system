/*jshint node:true*/
'use strict';

var path = require('path'),
	fs = require('fs-extra');

module.exports = {
	name: 'post-build-copy',

	postBuild: function (results) {
		var config = this.app.options.postBuildCopy;

		for (var i = 0; i < config.length; i++) {
			var src = path.resolve(results.directory + config[i].src),
				dest = path.resolve(config[i].dest);

			try {
				fs.copySync(src, dest, {
					// Overwrite existing file
					clobber: true
				});
			} catch (err) {
				console.error('Error in post-build-copy: ' + err.message);
			}
		}
	},

	isDevelopingAddon: function () {
		return true;
	}
};
