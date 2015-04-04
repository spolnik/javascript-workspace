'use strict';

module.exports = function (grunt) {
  grunt.config(
    'concat', {
    dist: {
      files: {
        'dist/js/main.js': ['app/js/**/*.js']
      }
    }
  });
};
