'use strict';

module.exports = function (grunt) {
  grunt.config(
    'uglify', {
    options: {
      report: 'gzip'
    },
    dist: {
      files: {
        'dist/js/main.js': ['app/js/main.js']
      }
    }
  });
};
