var cheerio = require('gulp-cheerio'),
	fs = require('fs'),
	gulp = require('gulp'),
	gulpif = require('gulp-if'),
	path = require('path'),
	rename = require('gulp-rename'),
	svgmin = require('gulp-svgmin'),
	svgstore = require('gulp-svgstore');

function renameSvgFiles(folder) {
	return rename(function (filePath) {
		// Use `id="wds-company-logo-wikia"` for company/logo-wikia.svg
		filePath.basename = 'wds-' + folder + '-' + filePath.basename;
	});
}

function renameSvgSprites() {
	return rename(function (filePath) {
		// Add `sprite-` prefix to the filename
		filePath.basename = 'sprite-' + filePath.basename;
	});
}

function deduplicateIds(folder) {
	return function (file) {
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
	}
}

function getDirectories(dir) {
	return fs.readdirSync(dir)
		.filter(function (file) {
			return fs.statSync(path.join(dir, file)).isDirectory();
		});
}

gulp.task('svg-sprite', function () {
	var sourceRoot = './assets',
		dest = './dist/svg';

	return getDirectories(sourceRoot).map(function (directory) {
		return gulp
			.src(path.join(sourceRoot, directory, '/*.svg'))
			.pipe(renameSvgFiles(directory))
			.pipe(svgmin(deduplicateIds(directory)))
			.pipe(svgstore({
				inlineSvg: true
			}))
			.pipe(renameSvgSprites())
			.pipe(gulp.dest(dest));
	});
});

gulp.task('svg-individual', function () {
	var sourceRoot = './assets',
		dest = './dist/svg';

	return getDirectories(sourceRoot).map(function (directory) {
		return gulp
			.src(path.join(sourceRoot, directory, '/*.svg'))
			.pipe(renameSvgFiles(directory))
			.pipe(svgmin(deduplicateIds(directory)))
			.pipe(gulp.dest(dest));
	});
});

gulp.task('svg', ['svg-sprite', 'svg-individual']);

gulp.task('default', ['svg']);
