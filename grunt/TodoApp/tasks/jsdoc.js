'use strict';

module.exports = function (grunt) {
  grunt.config(
    'jsdoc', {
    dist : {
      src: ['app/js/**/*.js'],
      options: {
        destination: 'doc'
      }
    }
  });
};
