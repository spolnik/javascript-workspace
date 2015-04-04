'use strict';

module.exports = function (grunt) {
  grunt.config(
    'responsive_images', {
    dest: {
      options: {
        sizes: [{
          width: 320,
          height: 240
        },{
          name: 'large',
          width: 640
        },{
          name: "large",
          width: 1024,
          suffix: "_x2",
          quality: 60
        }]
      },
      files: [{
        expand: true,
        src: ['img/**.{jpg,gif,png}'],
        cwd: 'app/',
        dest: 'dist/'
      }]
    }
  });
};
