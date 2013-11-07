module.exports = function (grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint:  {
      files: {
        src: 'src/<%= pkg.name %>.js'
      }
    },
    jasmine: {
      entityarray: {
        src: 'src/*.js'
      },
      options: {
        vendor: 'lib/*/*.js',
        specs: 'spec/*Spec.js',
        helpers: 'spec/helpers/*.js'
      }
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
    cssmin: {
      minify: {
        src: 'src/<%= pkg.name %>.css',
        dest: 'dist/<%= pkg.name %>.min.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['jshint', 'jasmine', 'uglify', 'cssmin']);

};
