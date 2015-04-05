'use strict';

module.exports = function (grunt) {
    grunt.config(
        'copy', {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'app/',
                    src: ['index.html', 'js/modernizr.js'],
                    dest: 'dist/'
                }, {
                    expand: true,
                    cwd: 'app/bower_components/bootstrap/fonts',
                    src: '*.*',
                    dest: 'dist/fonts/'
                }, {
                    expand: true,
                    cwd: 'app/bower_components/bootstrap/fonts',
                    src: '*.*',
                    dest: 'app/fonts/'
                }]
            }
        });
};
