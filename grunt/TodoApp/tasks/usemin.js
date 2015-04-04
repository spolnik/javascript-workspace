'use strict';

module.exports = function (grunt) {
  grunt.config(
    'useminPrepare', {
    dist: {
      src: 'app/index.html',
      dest: 'dist/'
    }
  });
  grunt.config('usemin', { html: 'dist/index.html' });
};
