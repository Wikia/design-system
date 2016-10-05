/*jshint node:true*/
'use strict';
var fs = require('fs');

module.exports = {
	name: 'inline-svg-sprites',

	isDevelopingAddon: function () {
		return true;
	},

	contentFor: function (type) {
		var paths = this.app.options.inlineSvgSprites,
			result = '';

		if (type === 'svg-sprites' && paths) {
			result += '<div style="height: 0; width: 0; position: absolute; overflow: hidden;">';

			paths.forEach(function (path) {
				result += fs.readFileSync(path).toString();
			});

			result += '</div>';

			return result;
		}
	}
};
