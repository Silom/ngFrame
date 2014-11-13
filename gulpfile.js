'use strict';

var gulp = require('gulp'),
    sources = {},
    destinations = {}

gulp.plugins = {
  plumber: require('gulp-plumber'),
  watch: require('gulp-watch'),
  vinylSource: require('vinyl-source-stream'),
  vinylTransform: require('vinyl-transform'),
  watchify: require('watchify'),
  exorcist: require('exorcist'),
  browserify: require('browserify'),
  nodemon: require('gulp-nodemon'),
  concat: require('gulp-concat'),
  clean: require('gulp-clean'),
  less: require('gulp-less'),
  sequence: require('run-sequence')
}

// Sources
sources.less = "src/**/*.less"
sources.docs = "src/**/*.jade"
sources.js = "src/**/*.js"

sources.root = {};
sources.root.docs = "src/index.jade"

sources.styles = {}
sources.styles.build = 'src/styles/bundle.less'
sources.styles.root = 'src/styles/'

sources.components = {}
sources.components.js = "src/components/**/*.js"
sources.components.docs = "src/components/**/*.jade"
sources.components.less = "src/components/**/*.less"

sources.modules = {}
sources.modules.js = "src/modules/**/*.js"
sources.modules.docs = "src/modules/**/*.jade"
sources.modules.less = "src/modules/**/*.less"

sources.assets = {}
sources.assets.fonts = ['src/assets/fonts/*', 'node_modules/font-awesome/fonts/**']
sources.assets.images = 'src/media/**/*'

// Destinations
destinations.root = 'dist/'
destinations.components = 'dist/components/'

destinations.assets = {}
destinations.assets.fonts = 'dist/fonts/'
destinations.assets.images = 'dist/media/'

// build and watch tasks, the file name is self explaining
require('./gulp/less')(gulp, sources, destinations)
require('./gulp/jade')(gulp, sources, destinations)
require('./gulp/assets')(gulp, sources, destinations)
require('./gulp/browserify')(gulp, sources, destinations)
require('./gulp/utils')(gulp, destinations.root)

// Main trigger
gulp.task('default', ['app:prebuild'])
gulp.task('app:prebuild', ['clean', 'app:build'])
gulp.task('app:build', ['assets:watch', 'browserify', 'bootstrap-build', 'jade:watch'])

gulp.task('bootstrap-build', function() {
  return gulp.src('src/styles/bootstrap-build.less')
  .pipe(gulp.plugins.less())
  .pipe(gulp.plugins.concat('core.css'))
  .pipe(gulp.dest('./dist/styles/'))
})
