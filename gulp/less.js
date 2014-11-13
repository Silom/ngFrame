var plumber = require('gulp-plumber'),
    watch = require('gulp-watch'),
    less = require('gulp-less'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat'),
    touch = require("touch"),
    fs = require('fs')

module.exports = function (gulp, sources, destinations) {
  gulp.task('less:build', function(event) {
    return gulp.src([sources.modules.less, sources.components.less, sources.behaviours.less, sources.routes.less])
      .pipe(plumber())
      .pipe(less({
        compress: true
      }))
      .pipe(concat('bundle.css'))
      .pipe(autoprefixer({
        browsers: ['last 2 versions'],
        cascade: false
      }))
      .pipe(gulp.dest(destinations.css));
  });

  gulp.task('less:watch', function(event) {
    watch({glob: sources.less}, ['less:build']);
  });
};
