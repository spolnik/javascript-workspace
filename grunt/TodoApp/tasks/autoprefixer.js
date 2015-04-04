'use strict';

module.exports = function (grunt) {
  grunt.config(
    'autoprefixer', {
    dist: {
      src: 'app/css/main.css',
    }
  });
};
