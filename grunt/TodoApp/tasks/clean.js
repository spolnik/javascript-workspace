'use strict';

module.exports = function (grunt) {
  grunt.config(
    'clean', {
    tmp: {
      src: ['.tmp', '.sass-cache', 'dist', 'app/js/template.js', 'app/js/modernizr.js']
    }
  });
};
