'use strict';

exports.clean = function (gulp, sources) {
  gulp.task('clean', function() {
    return gulp.src(sources)
      .pipe(gulp.plugins.clean({force: true}))
  })
}
