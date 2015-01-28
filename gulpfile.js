'use strict';

var gulp = require('gulp')

var plugins = {
  gutil: require('gulp-util'),
  concat: require('gulp-concat'),
  autoprefixer: require('gulp-autoprefixer'),
  watch: require('gulp-watch'),
  plumber: require('gulp-plumber'),
  less: require('gulp-less'),

  browserify: require('browserify'),
  exorcist: require('exorcist'),
  watchify: require('watchify'),
  jadeify: require('jadeify'),
  rm: require('rimraf'),
  source: require('vinyl-source-stream'),
  transform: require('vinyl-transform')
}

gulp.configs = {
  isProduction: plugins.gutil.env.dev ? false : true,
  sourceMap: plugins.gutil.env.dev ? true : false
}

// Sources
var sources = {}
sources.less = "src/**/*.less"
sources.docs = "src/**/*.jade"
sources.js = "src/**/*.js"

sources.root = {};
sources.root.docs = "src/index.jade"
sources.root.js = "./src/app.js"

sources.styles = {}
sources.styles.build = 'src/styles/bootstrap-build.less'
sources.styles.root = 'src/styles/'

sources.assets = {}
sources.assets.fonts = ['src/assets/fonts/*', 'node_modules/font-awesome/fonts/**']
sources.assets.images = 'src/media/**/*'

// Destinations
var destinations = {}
destinations.root = 'dist/'

destinations.docs = destinations.root
destinations.js = destinations.root
destinations.styles = destinations.root + 'styles/'

destinations.assets = {}
destinations.assets.fonts = destinations.root + 'fonts/'
destinations.assets.images = destinations.root + 'media/'

// build and watch tasks, the file name is self explaining
require('./gulp/utils')(gulp, plugins, sources, destinations)
require('./gulp/less')(gulp, plugins, sources, destinations)
require('./gulp/jade')(gulp, plugins, sources, destinations)
require('./gulp/assets')(gulp, plugins, sources, destinations)
require('./gulp/browserify')(gulp, plugins, sources, destinations)

// Main trigger with dev switch
gulp.task('default', ['clean'], function () {
  gulp.configs.isProduction ? gulp.start('app:build') : gulp.start('app:dev')
})

gulp.task('app:build', function () {
  gulp.start(['jade:build', 'browserify:build', 'less:build', 'assets:build'])
})

gulp.task('app:dev', function () {
  gulp.start(['jade:watch', 'browserify:watch', 'less:watch', 'assets:watch'])
})
