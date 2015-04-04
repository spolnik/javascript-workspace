'use strict';

module.exports = function (grunt) {
  grunt.config(
    'bower', {
    dist: {
      rjsConfig: 'app/js/paths.js',
      options: {
        baseUrl: 'app/'
      }
    }
  });
};
