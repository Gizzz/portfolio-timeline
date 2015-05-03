/// <reference path="typings/gruntjs/gruntjs.d.ts"/>

var mozjpeg = require('imagemin-mozjpeg');

module.exports = function(grunt) {
  grunt.initConfig({
    imagemin: {                          // Task
//      img_folder: {                         // Another target
//        options: {                       // Target options
//          optimizationLevel: 3,
//          svgoPlugins: [{ removeViewBox: false }],
//          use: [mozjpeg({quality: 90})]
//        },
//        files: [{
//          expand: true,                  // Enable dynamic expansion
//          cwd: 'img-src/',               // Src matches are relative to this path
//          src: ['*.*'],                  // Actual patterns to match
//          dest: 'img/'                   // Destination path prefix
//        }]
//      },
      pict_folder: {
        options: {                       // Target options
          optimizationLevel: 3,
          svgoPlugins: [{ removeViewBox: false }],
          use: [mozjpeg({quality: 90})]
        },
        files: [{
          expand: true,                  // Enable dynamic expansion
          cwd: 'pict-src/',               // Src matches are relative to this path
          src: ['*.*'],                  // Actual patterns to match
          dest: 'pict/'                   // Destination path prefix
        }]
      }
    }
  });
  
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.registerTask('default', ['imagemin']);
};

