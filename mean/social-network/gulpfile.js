var gulp = require('gulp');
var fs = require('fs');
fs.readdirSync(__dirname + '/gulp').forEach(function (task) {
    require('./gulp/' + task);
});

var del = require('del');

gulp.task('clean', function (cb) {
    del([
        'assets/**'
    ], cb);
});

gulp.task('build', ['clean', 'js', 'css']);
gulp.task('watch', ['watch:js', 'watch:css']);
gulp.task('dev', ['watch', 'dev:server']);
gulp.task('default', ['build']);
