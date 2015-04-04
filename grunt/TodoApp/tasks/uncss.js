'use strict';

module.exports = function (grunt) {
  grunt.config(
    'uncss', {
    dist: {
      files: {
        'app/css/main.css': ['app/index.html']
      }
    }
  });
};
