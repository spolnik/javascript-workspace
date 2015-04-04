'use strict';

module.exports = function (grunt) {
  grunt.config(
    'modernizr', {
    dist: {
      devFile : "remote",
      outputFile : "app/js/modernizr.js",
      extra : {
        shiv : true,
        load : false,
        cssclasses : true
      },
      //uglify: true,
      parseFiles : true,
      files : {
        src: ["build/styles/**/*.scss", "app/js/**/*.js"]
      }
    }
  });
};
