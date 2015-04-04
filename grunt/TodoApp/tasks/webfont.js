'use strict';

module.exports = function (grunt) {
  grunt.config(
    'webfont', {
    icons: {
      options: {
        font: 'font',
        stylesheet: 'scss',
        relativeFontPath: '../fonts',
        htmlDemo: false,
        engine: 'node'
      },
      destCss: 'build/styles/',
      src: 'build/svg/**/*.svg',
      dest: 'app/fonts'
    }
  });
};
