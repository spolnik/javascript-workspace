'use strict';

module.exports = function (grunt) {
  grunt.config(
    'nodeunit', {
    all: ['tests/**/*_test.js'],
    options: {
      reporter: 'junit',
      reporterOptions: {
        output: 'out'
      }
    }
  });
};
