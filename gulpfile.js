var gulp = require('gulp'),
	scss = require('gulp-sass'),
	styledown = require('gulp-styledown');

gulp.task('scss', function () {
	gulp.src(
		'styles/index.scss'
	).pipe(
		scss()
	).pipe(gulp.dest('www'));
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

gulp.task('default', ['scss', 'styledown']);
