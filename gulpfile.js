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

function injectFileContents(src, dest, prefix, suffix) {
	prefix = prefix || '';
	suffix = suffix || '';

	return gulp.src(tmpDir + outputFile)
		.pipe(inject(
			gulp.src(src),
			{
				transform: function (filePath, file) {
					return prefix + file.contents.toString('utf8') + suffix;
				}
			}
		))
		.pipe(gulp.dest(dest));
}

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
	return injectFileContents(
		['./config/default-styles.css', './config/custom-styles.css', tmpDir + 'component-styles.css'],
		tmpDir, '<style>', '</style>'
	);
});

gulp.task('inject-scripts', ['inject-styles'], function () {
	return injectFileContents(['./config/build.js', './config/webcomponents.min.js'], tmpDir, '<script>', '</script>');
});

gulp.task('inject-icons', ['inject-scripts'], function () {
	return injectFileContents('./bower_components/design-system/dist/svg/*.svg', tmpDir);
});

gulp.task('inject-webcomponents', ['inject-icons'], function () {
	return injectFileContents('./bower_components/design-system/webcomponents/*.html', tmpDir);
});

gulp.task('copy-output-file', ['inject-webcomponents'], function () {
	return gulp.src(tmpDir + outputFile).pipe(gulp.dest(outputDir));
});

// Visual Regression Testing
gulp.task('update-baseline', function () {
	var dir = './visuals/reference-page';

	return gulp.src(dir + '/*.regression.png', {
		base: dir
	}).pipe(rename(function (path) {
		path.basename = path.basename.replace('.regression', '.baseline');

		return path;
	})).pipe(gulp.dest(dir));
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
		'../design-system/**/*.scss',
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
