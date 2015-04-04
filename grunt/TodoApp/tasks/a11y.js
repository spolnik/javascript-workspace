'use strict';

module.exports = function (grunt) {
  grunt.config(
    'a11y', {
    live: {
      options: {
        urls: ['www.google.com']
      }
    }
  });
};
