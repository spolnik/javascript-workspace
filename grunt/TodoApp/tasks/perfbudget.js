'use strict';

module.exports = function (grunt) {
  grunt.config(
    'perfbudget', {
    default: {
      options: {
        url: 'https://developers.google.com',
        key: 'A.66bbb161777597f0575a883e51ae896d',
        budget: {
          visualComplete: '4000',
          SpeedIndex: '1500'
        }
      }
    }
  });
};
