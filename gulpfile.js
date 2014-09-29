var gulp = require('gulp'),
    browserify = require('gulp-browserify'),
    nodemon = require('gulp-nodemon'),
    concat = require('gulp-concat'),
    clean = require('gulp-clean'),
    less = require('gulp-less'),
    jade = require('gulp-jade'),
    sequence = require('run-sequence')

gulp.task('cleanOlds', function() {
  return gulp.src(['./dist/', './vendor/'])
  .pipe(clean({force: true}))
})

gulp.task('copyAwesomeFont', function() {
  return gulp.src('node_modules/font-awesome/fonts/**')
  .pipe( gulp.dest('dist/fonts/font-awesome/') )
})

gulp.task('copyMedia', function() {
  return gulp.src('media/**')
  .pipe( gulp.dest('dist/media/') )
})

gulp.task('browserify', function() {
  return gulp.src(['./app.js'])
  .pipe(browserify({
    insertGlobals: true,
    debug: true
  }))
  .pipe(concat('bundle.js'))
  .pipe(gulp.dest('./dist/js/'))
})

gulp.task('bootstrap-build', function() {
  return gulp.src('./styles/bootstrap-build.less')
  .pipe(less())
  .pipe(concat('core.css'))
  .pipe(gulp.dest('./dist/styles/'))
})

gulp.task('jade', function() {
  return gulp.src('./views/**/*.jade')
  .pipe(jade())
  .pipe(gulp.dest('./dist/views/'))
})

gulp.task('copyIndex', function() {
  return gulp.src('./index.jade')
  .pipe(gulp.dest('./dist/'))
})

gulp.task('build', function() {
  sequence(
    'cleanOlds',
    ['copyAwesomeFont', 'copyMedia', 'copyIndex'],
    ['browserify', 'bootstrap-build', 'jade']
  )
})

gulp.task('watch', function() {
  gulp.watch(['./index.jade'], ['copyIndex'])
  gulp.watch(['./styles/*.less'], ['bootstrap-build'])
  gulp.watch(['./views/**/*.jade'], ['jade'])
  gulp.watch(['./app.js', './views/**/*.js'], ['browserify'])
/*
  nodemon({
    script: './shut/index.js',
    ext: 'js',
    ignore: ['node_modules/', 'gulpfile.js']
  })
  .on('restart', function (event) {
    console.log("Restarted Backend Application; Changed files: ", event)
  })*/
})

gulp.task('default', function() {
  // Have to get this async bullshit working .. again
  sequence('build', 'watch')
})
