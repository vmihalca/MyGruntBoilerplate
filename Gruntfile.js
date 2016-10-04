module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    concat: {
      js: {
        src: ['js/1.js', 'js/2.js', 'js/3.js'],
        dest: 'build/js/scripts.js',
      },
    },
    less: {
      build: {
        files: {
          'build/css/styles.css': ['css/main.less', 'css/theme.less']
        },
      },
    },

    watch: {
      js: {
        files: ['js/**/*.js'],
        tasks: ['concat:js'],
      },
      css: {
        files: ['css/**/*.less'],
        tasks: ['less' ,'cssmin'],
      },
    },
    cssmin: {
      target: {
        files: {
          'build/css/styles.min.css': 'build/css/styles.css'
        },
      },
    },
  });
  // Actually running things.

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.registerTask('default', ['less', 'concat', 'cssmin', 'watch']);
};