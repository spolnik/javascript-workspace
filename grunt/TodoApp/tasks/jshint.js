'use strict';

module.exports = function (grunt) {
  grunt.config(
    'jshint', {
    options: {
      jshintrc: true
    },
    dist: {
      src: ['Gruntfile.js', 'app/js/**/*.js']
    },
    bower: {
      src: ['app/bower_components/handlebars/handlebars.js']
    }
  });
};
