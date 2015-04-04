'use strict';

module.exports = function (grunt) {
  grunt.config(
    'svg_sprite', {
        complex: {
          options: {
            shape: {
              spacing: {
                padding: 35
              }
            },
            mode: {
              view: {
                render: {
                  scss: {
                    dest: '../../build/styles/_font.scss'
                  },
                  css: false
                }
              }
            }
            //spritedir: '',
            //layout: 'vertical'
          },
          expand: true,
          cwd: 'build/svg',
          src: ['*.svg'],
          dest: 'app/img'
        }
  });
};
