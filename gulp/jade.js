'use strict';

module.exports = function (gulp, sources, destinations) {
  gulp.task('jade:build', function(event) {
    return gulp.src('src/index.jade')
      .pipe(gulp.dest(destinations.root))
  })

  gulp.task('jade:watch', function(event) {
    gulp.plugins.watch({glob: sources.docs}, ['jade:build'])
  })
}
