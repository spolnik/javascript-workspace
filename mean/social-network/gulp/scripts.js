var gulp = require('gulp');
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');
var ngAnnotate = require('gulp-ng-annotate');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var livereload = require('gulp-livereload');

gulp.task('js', ['lint'], function () {
    gulp.src(['ng/module.js', 'ng/**/*.js'])
        .pipe(sourcemaps.init())
        .pipe(concat('app.js'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('assets'))
        .pipe(livereload());
});

gulp.task('watch:js', ['js'], function () {
    livereload.listen();
    gulp.watch('ng/**/*.js', ['js']);
});

gulp.task('lint', function () {
    gulp.src(['ng/**/*.js', 'gulp/**/*.js', '*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter(stylish, {verbose: true}));
});

