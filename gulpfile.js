var gulp = require('gulp'),
	inject = require('gulp-inject'),
	livereload = require('gulp-livereload'),
	scss = require('gulp-sass'),
	styledown = require('gulp-styledown'),
	watch = require('gulp-watch');

// BUILD
gulp.task('scss', function () {
	gulp.src('styles/index.scss')
		.pipe(scss())
		.pipe(gulp.dest('www'));
});

gulp.task('styledown', ['scss'], function () {
	gulp.src([
		'./styles/*.scss',
		'./components/*.md'
	]).pipe(styledown({
		config: './styleguide/config.md',
		filename: 'index.html'
	})).pipe(gulp.dest('./'));
});

gulp.task('svg', ['styledown'], function () {
	gulp.src('./index.html')
		.pipe(inject(
			gulp.src('./bower_components/design-system/dist/symbols.svg'), {
				relative: true,
				transform: function (filePath, file) {
					return file.contents.toString('utf8');
				}
			}
		))
		.pipe(gulp.dest('./'));
});

gulp.task('build', ['scss', 'styledown', 'svg']);

gulp.task('default', ['build']);

// WATCH
gulp.task('build-and-reload', ['build'], function () {
	return livereload.reload();
});

gulp.task('watch', ['build'], function () {
	livereload.listen();

	return watch([
		'./styles/*.scss',
		'./components/*.(scss|md)'
	], function () {
		gulp.start('build-and-reload');
	});
});
