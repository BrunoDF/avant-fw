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
        watch: {
            files: ['assets/css/sass/**'],
            tasks: ['sass']
        }
    });
    
    // Load SASS Grunt plugin - Carrega o plugin SASS do Grunt
    grunt.loadNpmTasks('grunt-contrib-sass');
    
    // Watch
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    // Default Task
    grunt.registerTask('default', ['sass', 'watch']);
};