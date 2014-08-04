module.exports = function(grunt) {
  grunt.initConfig({
    'closure-compiler': {
      prod: {
        closurePath: '$CLOSURE_PATH',
        js: 'src/keyboard.js',
        jsOutputFile: 'build/js/keyboard.min.js',
        maxBuffer: 500,
        options: {
          compilation_level: 'ADVANCED_OPTIMIZATIONS',
          language_in: 'ECMASCRIPT5_STRICT'
        }
      },
      dev: {
        closurePath: '$CLOSURE_PATH',
        js: 'src/keyboard.js',
        jsOutputFile: 'build/js/keyboard.js',
        maxBuffer: 500,
        options: {
          debug: true,
          formatting: 'PRETTY_PRINT'
        }
      },
    }
  });
  grunt.loadNpmTasks('grunt-closure-compiler');
  grunt.registerTask('default', 'closure-compiler');
};
