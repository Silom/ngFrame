module.exports = function (gulp, sources, destinations) {

  gulp.task('assets:fonts:build', function (event) {
    return gulp.src(sources.assets.fonts)
      .pipe(gulp.plugins.plumber())
      .pipe(gulp.dest(destinations.assets.fonts))
  })

  gulp.task('assets:images:build', function (event) {
    return gulp.src(sources.assets.images)
      .pipe(gulp.plugins.plumber())
      .pipe(gulp.dest(destinations.assets.images))
  })

  gulp.task('assets:watch', function (event) {
    gulp.plugins.watch({glob: sources.assets.fonts}, ['assets:fonts:build'])
    gulp.plugins.watch({glob: sources.assets.images}, ['assets:images:build'])
  })
}
