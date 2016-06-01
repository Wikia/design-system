var gulp = require('gulp'),
	scss = require('gulp-sass');

gulp.task("default", function () {
	gulp.src(
		"styles/index.scss"
	).pipe(
		scss({
			"bundleExec": true
		}
	)).pipe(gulp.dest("www"));
});
