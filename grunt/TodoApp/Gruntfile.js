/*global module:false*/

var pngquant = require('imagemin-pngquant');

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
        },
        jshint: {
            options: {
                jshintrc: true
            },
            dist: {
                src: ['Gruntfile.js', 'app/js/**/*.js']
            },
            bower: {
                src: ['app/bower_components/handlebars/handlebars.js']
            }
        },
        modernizr: {
            dist: {
                devFile: 'remote',
                outputFile: 'app/js/modernizr.js',
                extra: {
                    shiv: true,
                    load: false,
                    cssclasses: true
                },
                uglify: true,
                parseFiles: true,
                files: {
                    src: ['build/styles/**/*.scss', 'app/js/**/*.js']
                }
            }
        },
        jsdoc: {
            dist: {
                src: ['app/js/**/*.js'],
                options: {
                    destination: 'doc'
                }
            }
        },
        imagemin: {
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
        },
        responsive_images: {
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
        },
        sprite: {
            all: {
                src: 'build/icons/*.png',
                dest: 'app/img/sprite.png',
                destCss: 'build/styles/_sprite.scss',
                imgPath: '../img',
                algorithm: 'top-down',
                padding: 35,
                engine: 'pixelsmith',
                cssFormat: 'scss',
                imgOpts: {
                    quality: 90
                }
            }
        },
        svgmin: {
            app: {
                options: {
                    plugins: [
                        { removeViewBox: true },
                        { removeUselessStrokeAndFill: true }
                    ]
                },
                files: [{
                    expand: true,
                    cwd: 'build/svg',
                    src: ['**/*.svg'],
                    dest: 'app/img/',
                    ext: '.min.svg'
                }]
            }
        },
        svg_sprite: {
            complex: {
                options: {
                    shape: {
                        spacing: {
                            padding: 35
                        }
                    },
                    mode: {
                        view: {
                            render: {
                                scss: {
                                    dest: '../../build/styles/_font.scss'
                                },
                                css: false
                            }
                        }
                    }
                    //spritedir: '',
                    //layout: 'vertical'
                },
                expand: true,
                cwd: 'build/svg',
                src: ['*.svg'],
                dest: 'app/img'
            }
        },
        webfont: {
            icons: {
                options: {
                    font: 'custom',
                    stylesheet: 'less',
                    relativeFontPath: '../fonts',
                    htmlDemo: false
                },
                destCss: 'build/styles/',
                src: 'build/svg/**/*.svg',
                dest: 'app/fonts'
            }
        },
        connect: {
            server: {
                options: {
                    port: 8000,
                    protocol: 'http',
                    hostname: '*',
                    base: './app'
                }
            },
            dev: {
                options: {
                    port: 8001,
                    protocol: 'http',
                    hostname: '*',
                    base: './app',
                    keepalive: true,
                    open: true,
                    debug: true,
                    middleware: function(connect, options, middlewares) {
                        middlewares.unshift(connect.compress());
                        return middlewares;
                    }
                }
            }
        },

        nodeunit: {
            all: ['tests/**/*_test.js'],
            options: {
                reporter: 'junit',
                reporterOptions: {
                    output: 'out'
                }
            }
        },

        replace: {
            fixtures: {
                src: ['build/fixtures/*.json'],
                dest: 'tests/fixtures/',
                replacements: [{
                    from: 'FUTURE_DATE',
                    to: function () {
                        var today = new Date();
                        return new Date(today.getFullYear() + 1, today.getMonth(), today.getDate())
                    }
                }]
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
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-modernizr');
    grunt.loadNpmTasks('grunt-jsdoc');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-responsive-images');
    grunt.loadNpmTasks('grunt-spritesmith');
    grunt.loadNpmTasks('grunt-svgmin');
    grunt.loadNpmTasks('grunt-svg-sprite');
    grunt.loadNpmTasks('grunt-webfont');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-text-replace');

    grunt.registerTask('default', [
        'clean',
        'useminPrepare',
        'sass',
        'bowerInstall',
        'autoprefixer',
        'jshint',
        'modernizr',
        'handlebars',
        'imagemin',
        'recess',
        'uncss',
        'copy',
        'cssmin',
        'concat',
        'requirejs',
        'rev',
        'usemin',
        'connect:server'
    ]);

    grunt.registerTask('serve', [
        'clean',
        'useminPrepare',
        'sass',
        'bowerInstall',
        'autoprefixer',
        'jshint',
        'modernizr',
        'handlebars',
        'imagemin',
        'uncss',
        'copy',
        'cssmin',
        'concat',
        'requirejs',
        'rev',
        'usemin',
        'connect:dev'
    ]);
};
