var autoprefixer = require('gulp-autoprefixer'),
	cheerio = require('gulp-cheerio'),
	clean = require('gulp-clean'),
	gulp = require('gulp'),
	inject = require('gulp-inject'),
	livereload = require('gulp-livereload'),
	path = require('path'),
	rename = require('gulp-rename'),
	scss = require('gulp-sass'),
	styledown = require('gulp-styledown'),
	watch = require('gulp-watch');

// BUILD DESIGN SYSTEM STYLES
gulp.task('build-styles', function () {
	return gulp.src('dist/styles.scss')
		.pipe(scss({outputStyle: 'compressed'}))
		.pipe(autoprefixer({
			browsers: ['last 3 versions'],
			cascade: false
		}))
		.pipe(gulp.dest('dist/css'));
});

// DEFAULT TASK
gulp.task('default', ['svg', 'build-styles', 'reference-page:build']);
