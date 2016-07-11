var gulp = require('gulp'),
	autoprefixer = require('gulp-autoprefixer'),
	inject = require('gulp-inject'),
	livereload = require('gulp-livereload'),
	scss = require('gulp-sass'),
	styledown = require('gulp-styledown'),
	watch = require('gulp-watch'),
	exec = require('child_process').exec,
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

gulp.task('default', ['inject-icons']);

// WATCH
gulp.task('build-and-reload', ['build'], function (done) {
	livereload.reload();
	done();
});

gulp.task('watch', ['build'], function () {
	livereload.listen();

	return watch([
		'./styles/*.scss',
		'./styleguide/*.*',
		'./components/*.(scss|md)'
	], function () {
		gulp.start('build-and-reload');
	});
});

gulp.task('watch-design-system', function () {
	return watch(
		'../design-system/**.scss'
	, function () {
		exec('bower update');
	});
});
