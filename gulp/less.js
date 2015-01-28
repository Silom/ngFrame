'use strict';

module.exports = function (gulp, plugins, sources, destinations) {
  gulp.task('less:build', function() {
    return gulp.src(sources.styles.build)
      .pipe(plugins.plumber())
      .pipe(plugins.less())
      .pipe(plugins.concat('core.css'))
      .pipe(gulp.dest(destinations.styles))
  })

  gulp.task('less:watch', ['less:build'], function() {
    plugins.watch(sources.less, function () {
      gulp.start('less:build')
    })
  })
}
