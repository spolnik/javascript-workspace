/*global module:false*/
module.exports = function(grunt) {

    grunt.initConfig({

        useminPrepare: {
            dist: {
                src: 'app/index.html',
                dest: 'dist/'
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'app/css/main.css': 'build/styles/main.scss'
                }
            }
        },
        bowerInstall: {
            dist: {
                src: ['app/**/*.html'],
                dependencies: true,
                devDependencies: true,
                exclude: []
            }
        },
        autoprefixer: {
            dist: {
                src: 'app/css/main.css'
            }
        },
        handlebars: {
            dist: {
                options: {
                    namespace: 'JST',
                    amd: true
                },
                files: {
                    'app/js/template.js': ['build/templates/**/*.hbs']
                }
            }
        },
        recess: {
            dist: {
                options: {
                    compile: false,
                    noIDs: true
                },
                files: {
                    'src': 'app/css/**/*.css'
                }
            }
        },
        uncss: {
            dist: {
                files: {
                    'app/css/main.css': ['app/index.html']
                }
            }
        },
        copy: {
            dist: {
                expand: true,
                cwd: 'app/',
                src: 'index.html',
                dest: 'dist/'
            }
        },
        cssmin: {
            dist: {
                options: {
                    report: 'gzip'
                },
                files: {
                    'dist/css/main.css': 'app/css/main.css'
                }
            }
        },
        concat: {
            dist: {
                files: {
                    'dist/js/main.js': ['app/js/**/*.js']
                }
            }
        },
        usemin: {
            html: 'dist/index.html'
        },
        rev: {
            dist: {
                src: ['dist/css/main.css', 'dist/js/main.js']
            }
        },
        bower: {
            dist: {
                rjsConfig: 'app/js/paths.js',
                options: {
                    baseUrl: 'app/'
                }
            }
        },
        requirejs: {
            dist: {
                options: {
                    baseUrl: 'app/',
                    name: '../.tmp/concat/js/main',
                    out: 'dist/js/main.js',
                    optimize: 'uglify2',
                    mainConfig: 'app/js/paths.js',
                    shim: {
                        handlebars: {
                            exports: 'Handlebars'
                        }
                    },
                    paths: {
                        backbone: 'bower_components/backbone/backbone',
                        bootstrap: 'bower_components/bootstrap/dist/js/bootstrap',
                        jquery: 'bower_components/jquery/dist/jquery',
                        requirejs: 'bower_components/requirejs/require',
                        underscore: 'bower_components/underscore/underscore',
                        handlebars: 'bower_components/handlebars/handlebars'
                    }
                }
            }
        },
        clean: {
            tmp: {
                src: ['.tmp', '.sass-cache', 'dist', 'app/js/template.js', 'app/js/modernizr.js']
            }
        },
        uglify: {
            options: {
                report: 'gzip'
            },
            dist: {
                files: {
                    'dist/js/main.js': ['app/js/main.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-bower-install');
    grunt.loadNpmTasks('grunt-recess');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-uncss');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-usemin');
    grunt.loadNpmTasks('grunt-rev');
    grunt.loadNpmTasks('grunt-bower-requirejs');
    grunt.loadNpmTasks('grunt-contrib-requirejs');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-handlebars');

    grunt.registerTask('default', [
        'clean',
        'useminPrepare',
        'sass',
        'bowerInstall',
        'autoprefixer',
        'handlebars',
        'recess',
        'uncss',
        'copy',
        'cssmin',
        'concat',
        'requirejs',
        'rev',
        'usemin'
    ]);
};
