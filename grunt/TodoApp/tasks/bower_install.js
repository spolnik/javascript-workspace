'use strict';

module.exports = function (grunt) {
  grunt.config(
    'bowerInstall', {
    dist: {
      src: ['app/**/*.html'],
      dependencies: true,
      devDependencies: true,
      exclude: []
    }
  });
};
