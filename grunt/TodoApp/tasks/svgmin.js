'use strict';

module.exports = function (grunt) {
  grunt.config(
    'svgmin', {
    app: {
      options: {
        plugins: [
          { removeViewBox: true },
          { removeUselessStrokeAndFill: true }
        ]
      },
      files: [{
        expand: true,
        cwd: 'build/svg',
        src: ['**/*.svg'],
        dest: 'app/img/',
        ext: '.min.svg'
      }]
    }
  });
};
