/// <reference path="typings/gruntjs/gruntjs.d.ts"/>

var mozjpeg = require('imagemin-mozjpeg');
var imagemin_options = {
  optimizationLevel: 3,
  svgoPlugins: [{ removeViewBox: false }],
  use: [mozjpeg({ quality: 90 })]
};

module.exports = function (grunt) {
  grunt.initConfig({
    imagemin: {                          
      img_folder: {                         
        options: imagemin_options,
        files: [{
          expand: true,                  
          cwd: 'img/img-src/',               
          src: ['*.*'],                  
          dest: 'img/'                   
        }]
      },
    },
    responsive_images: {
      one_x: {
        options: {
          sizes: [{
            name: 'sm',
            width: 260,
            quality: 85,
          }, 
          {
            name: 'md',
            width: 310,
            quality: 85,
          }, {
            name: "lg",
            width: 360,
            quality: 85,
          }, 
          {
            name: "src",
            width: "100%",
            quality: 85,
          }]
        },
        files: [{
          expand: true,
          cwd: 'pict/pict-src/',
          src: ['proj-?.jpg'],
          dest: 'pict/'
        }]
      },
      two_x: {
        options: {
          sizes: [{
            name: 'sm',
            width: 520,
            quality: 85,
          }, 
          {
            name: 'md',
            width: 620,
            quality: 85,
          }, {
            name: "lg",
            width: 720,
            quality: 85,
          }, 
          {
            name: "src",
            width: "100%",
            quality: 85,
          }]
        },
        files: [{
          expand: true,
          cwd: 'pict/pict-src/',
          src: ['proj-?@2x.jpg'],
          dest: 'pict/'
        }]
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-responsive-images');
  
  grunt.registerTask('default', [
    'imagemin', 
    'responsive_images',
  ]);
};

