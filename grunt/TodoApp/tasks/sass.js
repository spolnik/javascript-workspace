'use strict';

module.exports = function (grunt) {
  grunt.config(
    'sass', {
    dist: {
      options: {
        style: 'expanded'
      },
      files: {
        'app/css/main.css': 'build/styles/main.scss'
      }
    }
  });
};
