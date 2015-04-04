'use strict';

module.exports = function (grunt) {
  grunt.config(
    'copy', {
    dist: {
      expand: true,
      cwd: 'app/',
      src: ['index.html', 'js/modernizr.js'],
      dest: 'dist/'
    }
  });
};
