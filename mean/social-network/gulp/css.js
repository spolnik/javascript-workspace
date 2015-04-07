var gulp = require('gulp');
var stylus = require('gulp-stylus');
var autoprefixer = require('gulp-autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');

gulp.task('css', function () {
    gulp.src('css/**/*.styl')
        .pipe(stylus())
        .pipe(sourcemaps.init())
        .pipe(autoprefixer())
        .pipe(concat('app.css'))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('assets'))
        .pipe(livereload());
});

gulp.task('watch:css', ['css'], function () {
    livereload.listen();
    gulp.watch('css/**/*.styl', ['css']);
});
