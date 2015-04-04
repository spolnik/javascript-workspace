'use strict';

module.exports = function (grunt) {
  grunt.config(
    'handlebars', {
    dist: {
      options: {
        //namespace: 'JST',
        amd: true
      },
      files: {
        'app/js/template.js': ['build/templates/**/*.hbs']
      }
    }
  });
};
