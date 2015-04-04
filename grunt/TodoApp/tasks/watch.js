'use strict';

module.exports = function (grunt) {
  grunt.config(
    'watch', {
    css: {
      files: ['<%= paths.sass.src %>**/*.scss'],
      tasks: ['css'],
      options: {
        livereload: true
      }
    }
  });
};
