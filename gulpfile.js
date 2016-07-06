var fs = require('fs'),
	gulp = require('gulp'),
	path = require('path'),
	rename = require('gulp-rename'),
	svgmin = require('gulp-svgmin'),
	svgstore = require('gulp-svgstore');

function getFolders(dir) {
	return fs.readdirSync(dir)
		.filter(function (file) {
			return fs.statSync(path.join(dir, file)).isDirectory();
		});
}

gulp.task('svg', function () {
	var svgRootDir = './assets',
		folders = getFolders(svgRootDir);

	return folders.map(function (folder) {
		return gulp
			.src(path.join(svgRootDir, folder, '/*.svg'))
			.pipe(rename(function (filePath) {
				// Use `id="company-logo-wikia"` for company/logo-wikia.svg
				filePath.basename = folder + '-' + filePath.basename;
			}))
			.pipe(svgmin(function (file) {
				// Minify and make sure that we don't have duplicated ids in reusable elements
				// Id of <symbol> element is set by svgstore based on the filename, not here
				var prefix = folder + '-' + path.basename(file.relative, path.extname(file.relative));

				return {
					plugins: [{
						cleanupIDs: {
							prefix: prefix + '-',
							minify: true
						}
					}]
				}
			}))
			.pipe(svgstore({
				inlineSvg: true
			}))
			.pipe(gulp.dest('dist'));
	});
});

gulp.task('default', ['svg']);
