module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    style: 'compressed',
                    precision: 9
                },
                files: {
                    'assets/css/avant-fw.css' : 'assets/css/sass/avant-fw.scss',
                    'assets/css/avant-modal.css' : 'assets/css/sass/avant-modal.scss'
                }
            }
        },
        uglify: {
            task: {
                options: {
                    mangle: true
                },
                files: {
                    'assets/js/avant-fw.js': ['assets/js/src/*.js', 'assets/js/src/on/all_on.js'],
                    'assets/js/avant-modal.js': ['assets/js/src/modal.js', 'assets/js/src/on/modal_on.js'],
                }
            },
            gzip: {
                options: {
                    mangle: true,
                    report: 'gzip'
                },
                files: {
                    'assets/js/avant-fw.js': ['assets/js/src/*.js', 'assets/js/src/on/all_on.js'],
                    'assets/js/avant-modal.js': ['assets/js/src/modal.js', 'assets/js/src/on/modal_on.js'],
                }
            }
        },
        watch: {
            css: {
                files: ['assets/css/sass/**'],
                tasks: ['sass']
            },
            js: {
                files: ['assets/js/src/**'],
                tasks: ['uglify:task']
            }
        },
        cssmin: {
            task: {
                files: { 
                    'assets/css/avant-modal.css': [ 'assets/css/avant-modal.css' ],
                    'assets/css/avant-fw.css': [ 'assets/css/avant-fw.css' ]
                }
            },
            gzip: {
                options : {
                    report : 'gzip'
                },
                files: { 
                    'assets/css/avant-modal.css': [ 'assets/css/avant-modal.css' ],
                    'assets/css/avant-fw.css': [ 'assets/css/avant-fw.css' ]
                }
            }
        }
    });
    
    // Load SASS Grunt plugin - Carrega o plugin SASS do Grunt
    grunt.loadNpmTasks('grunt-contrib-sass');
    
    // CSSmin
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    
    // Watch
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    // Uglify
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    // Default Task
    grunt.registerTask('default', ['sass', 'cssmin:task', 'uglify:task', 'watch']);
    
    // Gzip Report
    grunt.registerTask('gzip', ['uglify:gzip', 'cssmin:gzip']);
};