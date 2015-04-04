'use strict';

module.exports = function (grunt) {
  grunt.config(
    'recess', {
    dist: {
      options: {
        compile: false,
        noIDs: true
      },
      files: {
        'src': 'app/css/**/*.css'
      }
    }
  });
};
