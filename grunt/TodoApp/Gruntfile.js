/*global module:false*/

module.exports = function(grunt) {

    // Measure performance
    require('time-grunt')(grunt);

    // Load main tasks
    require('load-grunt-tasks')(grunt, {
        pattern: ['grunt-*', '!grunt-contrib-imagemin', '!grunt-spritesmith']
    });

    // Custom task for images
    grunt.registerTask('images', [], function () {
        require('load-grunt-tasks')(grunt, { config: './build/images.json' });
        grunt.task.run('imagemin', 'sprite');
    });

    // Load configuration
    grunt.task.loadTasks('tasks');
};
