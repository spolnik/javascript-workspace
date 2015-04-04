'use strict';

module.exports = function (grunt) {
  grunt.config(
    'pagespeed', {
    options: {
      nokey: true,
      url: "https://developers.google.com"
    },
    prod: {
      options: {
        locale: "en_GB",
        strategy: "desktop",
        threshold: 80
      }
    }
  });
};
