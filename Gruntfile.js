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
                    'assets/css/avant-fw.css' : 'assets/css/sass/avant-fw.scss'
                }
            }
        },
        uglify: {
            my_target: {
                files: {
                    'assets/js/main.js': ['assets/js/src/*.js']
                }
            }  
        },
        watch: {
            css: {
                files: ['assets/css/sass/**'],
                tasks: ['sass']
            },
            js: {
                files: ['assets/js/src/*.js'],
                tasks: ['']
            }
        }
    });
    
    // Load SASS Grunt plugin - Carrega o plugin SASS do Grunt
    grunt.loadNpmTasks('grunt-contrib-sass');
    
    // Watch
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    // Uglify
    grunt.loadNpmTasks('grunt-contrib-uglify');
    
    // Default Task
    grunt.registerTask('default', ['sass', 'uglify','watch']);
};