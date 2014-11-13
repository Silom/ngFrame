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
sources.styles.build = 'src/styles/bootstrap-build.less'
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
destinations.styles = 'dist/styles/'

destinations.assets = {}
destinations.assets.fonts = 'dist/fonts/'
destinations.assets.images = 'dist/media/'

// build and watch tasks, the file name is self explaining
require('./gulp/utils').clean(gulp, destinations.root)
require('./gulp/less')(gulp, sources, destinations)
require('./gulp/jade')(gulp, sources, destinations)
require('./gulp/assets')(gulp, sources, destinations)
require('./gulp/browserify')(gulp, sources, destinations)

// Main trigger
gulp.task('default', ['app:build'])
gulp.task('app:build', ['clean'], function () {
  gulp.plugins.sequence(['assets:watch', 'browserify', 'less:watch', 'jade:watch'])
})
