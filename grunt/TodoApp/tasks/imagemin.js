'use strict';

module.exports = function (grunt) {
  var pngquant = require('imagemin-pngquant');

  grunt.config(
    'imagemin', {
    app: {
      options: {
        optimizationLevel: 6,
        progressive: true,
        use: [pngquant()]
      },
      files: [{
        expand: true,
        cwd: 'app/',
        src: ['**/*.{png,jpg,gif}'],
        dest: 'dist/'
      }]
    }
  });
};
