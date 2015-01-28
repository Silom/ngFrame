'use strict';

module.exports = function (gulp, plugins, sources, destinations) {
  // Trigger
  gulp.task('jade:watch', ['jade:build'], function() {
    plugins.watch(sources.root.docs, function () {
      gulp.start('jade:build')
    })
  })

  gulp.task('jade:build', ['jade:template:build'])

  // Tasks
  gulp.task('jade:template:build', function() {
    return gulp.src(sources.root.docs)
    .pipe(plugins.plumber())
    .pipe(gulp.dest(destinations.docs))
  })
}
