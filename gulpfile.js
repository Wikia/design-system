var gulp = require('gulp'),
	autoprefixer = require('gulp-autoprefixer'),
	inject = require('gulp-inject'),
	scss = require('gulp-sass'),
	styledown = require('gulp-styledown'),
	watch = require('gulp-watch'),
	clean = require('gulp-clean'),
	rename = require('gulp-rename');

// BUILD
gulp.task('clean-up', function () {
	return gulp.src('./www', {read: false}).pipe(clean());
});

gulp.task('copy-config-files', ['clean-up'], function () {
	return gulp.src(['./config/*.css', './config/*.js']).pipe(gulp.dest('./www'));
});

gulp.task('build-styles', ['copy-config-files'], function () {
	return gulp.src('styles/index.scss')
		.pipe(scss())
		.pipe(autoprefixer({
			browsers: ['last 3 versions'],
			cascade: false
		}))
		.pipe(rename('component-styles.css'))
		.pipe(gulp.dest('./www'));
});

gulp.task('build-html', ['build-styles'], function () {
	return gulp.src(['./styles/*.scss', './components/*.md'])
		.pipe(styledown({
			config: './config/config.md',
			filename: 'index.html'
		}))
		.pipe(gulp.dest('./www'));
});

gulp.task('inject-icons', ['build-html'], function () {
	return gulp.src('./www/index.html')
		.pipe(inject(
			gulp.src('./bower_components/design-system/dist/*.svg'), {
				relative: true,
				transform: function (filePath, file) {
					return file.contents.toString('utf8');
				}
			}
		))
		.pipe(gulp.dest('./www'));
});

// WATCH
gulp.task('rebuild', ['default'], function (done) {
	console.log('\n# Finished rebuilding files.');
	done();
});

gulp.task('watch', ['default'], function () {
	console.log('\n# Gulp is watching your files.\n# You can start developing.');

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
gulp.task('default', ['inject-icons']);
