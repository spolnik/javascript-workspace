'use strict';

module.exports = function (grunt) {

  grunt.registerTask('prepare', ['clean', 'useminPrepare']);
  grunt.registerTask('css', ['newer:sass', 'newer:autoprefixer', 'newer:uncss']);
  grunt.registerTask('dependencies', ['bowerInstall']);
  grunt.registerTask('js', ['newer:jshint', 'handlebars']);
  grunt.registerTask('minify', ['copy', 'cssmin', 'newer:concat', 'rev', 'usemin']);
  grunt.registerTask('build', ['prepare', 'dependencies', 'css', 'js', 'minify']);


  grunt.registerTask('default', ['build', 'connect:server', 'watch']);
  grunt.registerTask('serve', ['build', 'connect:dev']);
  grunt.registerTask('test', ['build', 'karma']);

};
