var gulp   = require('gulp'),
	rename = require('gulp-rename'),
	uglify = require('gulp-uglify');

gulp.task('main', function () {
	return gulp.src('index.js')
		.pipe(rename('gulp-anonymize-modules.js'))
		.pipe(gulp.dest('dist'));
});

gulp.task('minify', ['main'], function () {
	return gulp.src('dist/gulp-anonymize-modules.js')
		.pipe(uglify())
		.pipe(rename('gulp-anonymize-modules.min.js'))
		.pipe(gulp.dest('dist'));
});

gulp.task('default', ['main', 'minify']);
