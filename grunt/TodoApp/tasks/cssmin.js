'use strict';

module.exports = function (grunt) {
  grunt.config(
    'cssmin', {
    dist: {
      options: {
        report: 'gzip'
      },
      files: {
        '<%= paths.css.dest %>/main.css': '<%= paths.css.src %>/main.css'
      }
    }
  });
};
