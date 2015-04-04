'use strict';

module.exports = function (grunt) {
  grunt.config(
    'sprite', {
    all: {
      src: 'build/icons/*.png',
      dest: 'app/img/sprite.png',
      destCss: 'build/styles/_sprite.scss',
      imgPath: '../img',
      algorithm: 'top-down',
      padding: 35,
      engine: 'pixelsmith',
      cssFormat: 'scss',
      imgOpts: {
        quality: 90
      }
    }
  });
};
