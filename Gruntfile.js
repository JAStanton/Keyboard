module.exports = function(grunt) {
  grunt.initConfig({
    gjslint: {
      options: {
        reporter: {
          name: 'console'
        }
      },
      all: {
        src: 'src/*.js'
      }
    },
    'closure-compiler': {
      prod: {
        closurePath: '$CLOSURE_PATH',
        js: 'src/*.js',
        jsOutputFile: 'build/js/keyboard.min.js',
        maxBuffer: 500,
        options: {
          compilation_level: 'ADVANCED_OPTIMIZATIONS',
          language_in: 'ECMASCRIPT5_STRICT'
        }
      },
      dev: {
        closurePath: '$CLOSURE_PATH',
        js: 'src/*.js',
        jsOutputFile: 'build/js/keyboard.js',
        maxBuffer: 500,
        options: {
          debug: true,
          formatting: 'PRETTY_PRINT'
        }
      },
    }
  });
  // https://github.com/gmarty/grunt-closure-compiler
  grunt.loadNpmTasks('grunt-closure-compiler');
  grunt.loadNpmTasks('grunt-gjslint');
  grunt.registerTask('default', ['gjslint', 'closure-compiler']);
};
