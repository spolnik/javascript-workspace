'use strict';

module.exports = function (grunt) {
  grunt.config.merge({
    paths: {
      css: {
        src: 'app/css/',
        dest: 'dest/css/'
      },
      sass: {
        src: 'build/styles/'
      }
    }
  });
};
