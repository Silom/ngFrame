'use strict';

module.exports = function (gulp, sources, destinations) {
  gulp.task('less:build', function() {
    return gulp.src(sources.styles.build)
      .pipe(gulp.plugins.plumber())
      .pipe(gulp.plugins.less())
      .pipe(gulp.plugins.concat('core.css'))
      .pipe(gulp.dest(destinations.styles))
  })

  gulp.task('less:watch', function() {
    gulp.plugins.watch({glob: sources.less}, ['less:build'])
  })
}
