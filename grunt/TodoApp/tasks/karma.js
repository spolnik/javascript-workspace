'use strict';

module.exports = function (grunt) {
  grunt.config(
    'karma', {
    all: {
      configFile: 'tests/karma.conf.js'
    }
  });
};
