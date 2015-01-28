'use strict';

module.exports = function (gulp, plugins, sources, destinations) {
  // Trigger
  gulp.task('assets:watch', ['assets:build'], function () {
    plugins.watch(sources.assets.fonts, function () {
      gulp.start('assets:fonts:build')
    })

    plugins.watch(sources.assets.images, function () {
      gulp.start('assets:images:build')
    })
  })

  gulp.task('assets:build', ['assets:fonts:build', 'assets:images:build'])

  // Tasks
  gulp.task('assets:fonts:build', function () {
    return gulp.src(sources.assets.fonts)
      .pipe(plugins.plumber())
      .pipe(gulp.dest(destinations.assets.fonts))
  })

  gulp.task('assets:images:build', function () {
    return gulp.src(sources.assets.images)
      .pipe(plugins.plumber())
      .pipe(gulp.dest(destinations.assets.images))
  })

}
