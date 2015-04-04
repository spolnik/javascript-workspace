'use strict';

module.exports = function (grunt) {
  grunt.config(
    'requirejs', {
    dist: {
      options: {
        baseUrl: 'app',
        name: '../.tmp/concat/js/main',
        out: 'dist/js/main.js',
        optimize: 'uglify2',
        mainConfig: 'app/js/paths.js',
        shim: {
          handlebars: {
            exports: 'Handlebars'
          }
        },
        paths: {
          backbone: 'bower_components/backbone/backbone',
          bootstrap: 'bower_components/bootstrap/dist/js/bootstrap',
          jquery: 'bower_components/jquery/dist/jquery',
          requirejs: 'bower_components/requirejs/require',
          underscore: 'bower_components/underscore/underscore',
          handlebars: 'bower_components/handlebars/handlebars'
        }
      }
    }
  });
};
