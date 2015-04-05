'use strict';

module.exports = function (grunt) {
  var compression = require('compression');

  grunt.config(
    'connect', {
    server: {
      options: {
        port: 8000,
        protocol: 'http',
        hostname: '*',
        base: './app',
        livereload: true
      }
    },
    dev: {
      options: {
        port: 8001,
        protocol: 'http',
        hostname: '*',
        base: './app',
        open: true,
        debug: true,
        keepalive: true,
        middleware: function(connect, options, middlewares) {
          middlewares.unshift(connect.compress());
          return middlewares;
        }
      }
    }
  });
};
