'use strict';

module.exports = function (grunt) {
  grunt.config(
    'replace', {
    fixtures: {
      src: ['build/fixtures/*.json'],
      dest: 'tests/fixtures/',
      replacements: [{
        from: 'FUTURE_DATE',
        to: function () {
          var today = new Date();
          return new Date(today.getFullYear() + 1, today.getMonth(), today.getDate());
        }
      }]
    }
  });
};
