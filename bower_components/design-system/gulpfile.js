var gulp = require('gulp'),
	path = require('path'),
	rename = require('gulp-rename'),
	svgmin = require('gulp-svgmin'),
	svgstore = require('gulp-svgstore');

gulp.task('svg', function () {
	return gulp
		.src('assets/**/*.svg', {
			base: 'assets'
		})
		.pipe(rename(function (filePath) {
			// Use `id="company-logo-wikia"` for company/logo-wikia.svg
			var name = filePath.dirname.split(filePath.sep);

			name.push(filePath.basename);
			filePath.basename = name.join('-');
		}))
		.pipe(svgmin(function (file) {
			// Minify and make sure that we don't have duplicated ids in reusable elements
			var prefix = path.basename(file.relative, path.extname(file.relative));

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
		.pipe(rename('symbols.svg'))
		.pipe(gulp.dest('dist'));
});

gulp.task('default', ['svg']);
