'use strict';

module.exports = function (grunt) {
  grunt.config(
    'rev', {
    dist: {
      src: ['dist/css/main.css', 'dist/js/**/*.js']
    }
  });
};
