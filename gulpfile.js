var gulp = require('gulp'),
	autoprefixer = require('gulp-autoprefixer'),
	inject = require('gulp-inject'),
	livereload = require('gulp-livereload'),
	scss = require('gulp-sass'),
	styledown = require('gulp-styledown'),
	watch = require('gulp-watch'),
	clean = require('gulp-clean'),
	rename = require('gulp-rename');

var tmpDir = './tmp/',
	outputDir = './',
	outputFile = 'index.html';

// BUILD
gulp.task('clean-up', function () {
	return gulp.src(tmpDir, {read: false}).pipe(clean());
});

gulp.task('build-styles', ['clean-up'], function () {
	return gulp.src('styles/index.scss')
		.pipe(scss())
		.pipe(autoprefixer({
			browsers: ['last 3 versions'],
			cascade: false
		}))
		.pipe(rename('component-styles.css'))
		.pipe(gulp.dest(tmpDir));
});

gulp.task('build-html', ['build-styles'], function () {
	return gulp.src(['./styles/*.scss', './components/*.md'])
		.pipe(styledown({
			config: './config/config.md',
			filename: outputFile
		}))
		.pipe(gulp.dest(tmpDir));
});

gulp.task('inject-styles', ['build-html'], function () {
	return gulp.src(tmpDir + outputFile)
		.pipe(inject(
			gulp.src([
				'./config/default-styles.css',
				'./config/custom-styles.css',
				tmpDir + 'component-styles.css'
			]),
			{
				transform: function (filePath, file) {
					return '<style>' + file.contents.toString('utf8') + '</style>';
				}
			}
		))
		.pipe(gulp.dest(tmpDir));
});

gulp.task('inject-scripts', ['inject-styles'], function () {
	return gulp.src(tmpDir + outputFile)
		.pipe(inject(
			gulp.src('./config/build.js'),
			{
				transform: function (filePath, file) {
					return '<script>' + file.contents.toString('utf8') + '</script>';
				}
			}
		))
		.pipe(gulp.dest(tmpDir));
});

gulp.task('inject-icons', ['inject-scripts'], function () {
	return gulp.src(tmpDir + outputFile)
		.pipe(inject(
			gulp.src('./bower_components/design-system/dist/*.svg'),
			{
				relative: true,
				transform: function (filePath, file) {
					return file.contents.toString('utf8');
				}
			}
		))
		.pipe(gulp.dest(tmpDir));
});

gulp.task('copy-output-file', ['inject-icons'], function () {
	return gulp.src(tmpDir + outputFile).pipe(gulp.dest(outputDir));
});

// WATCH
gulp.task('rebuild', ['default'], function (done) {
	console.log('\n# Finished rebuilding files.');
	livereload.reload();
	done();
});

gulp.task('watch', ['default'], function () {
	console.log('\n# Gulp is watching your files.\n# You can start developing.');
	livereload.listen();

	return watch([
		'../design-system/**.scss',
		'./components/*.md',
		'./config/*.css',
		'./config/*.js',
		'./config/*.md',
		'./styles/*.scss'
	], function () {
		console.log('\n# Change detected, rebuilding files...');
		gulp.start('rebuild');
	});
});

// DEFAULT TASK
gulp.task('default', ['copy-output-file']);
