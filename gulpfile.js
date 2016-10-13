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

// BUILD REFERENCE PAGE

var tmpDir = './reference-page/tmp/',
	outputDir = './reference-page/',
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
gulp.task('reference-page:clean-up', function () {
	return gulp.src(tmpDir, {read: false}).pipe(clean());
});

gulp.task('reference-page:build-styles', ['reference-page:clean-up'], function () {
	return gulp.src('reference-page/styles/index.scss')
		.pipe(scss())
		.pipe(autoprefixer({
			browsers: ['last 3 versions'],
			cascade: false
		}))
		.pipe(rename('component-styles.css'))
		.pipe(gulp.dest(tmpDir));
});

gulp.task('reference-page:build-html', ['reference-page:build-styles'], function () {
return gulp.src(['./reference-page/styles/*.scss', './reference-page/components/*.md'])
	.pipe(styledown({
		config: './reference-page/config/config.md',
		template: [
			'<!doctype html>',
			'<html>',
			'<head>',
			'<meta charset="utf-8">',
			'<title>Wikia Design System</title>',
			'</head>',
			'<body>',
			'</body>',
			'</html>'
		].join('\n'),
		filename: outputFile
	}))
	.pipe(gulp.dest(tmpDir));
});

gulp.task('reference-page:inject-styles', ['reference-page:build-html'], function () {
	return injectFileContents(
		['./reference-page/config/default-styles.css', './reference-page/config/custom-styles.css', tmpDir + 'component-styles.css'],
		tmpDir, '<style>', '</style>'
	);
});

gulp.task('reference-page:inject-scripts', ['reference-page:inject-styles'], function () {
	return injectFileContents('./reference-page/config/build.js', tmpDir, '<script>', '</script>');
});

gulp.task('reference-page:inject-icons', ['reference-page:inject-scripts'], function () {
	return injectFileContents('./dist/svg/*.svg', tmpDir);
});

gulp.task('reference-page:build', ['reference-page:inject-icons'], function () {
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
		'**/*.scss',
		'./assets/**/*.svg',
		'./reference-page/components/*.md',
		'./reference-page/config/*.css',
		'./reference-page/config/*.js',
		'./reference-page/config/*.md',
	], function () {
		console.log('\n# Change detected, rebuilding files...');
		gulp.start('rebuild');
	});
});

// DEFAULT TASK
gulp.task('default', ['svg', 'build-styles', 'reference-page:build']);
