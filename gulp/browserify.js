'use strict';

module.exports = function (gulp, sources, destinations) {
  gulp.task('browserify', function() {
    var b = gulp.plugins.browserify({
      cache: {},
      packageCache: {},
      fullPaths: true,
      debug: true
    })

    b.add('./src/app.js')

    // So we can use fs
    b.transform('jadeify')

    b = gulp.plugins.watchify(b)

    b.on('update', function() {
      bundleShare(b)
    })

    bundleShare(b)

    function bundleShare(browserifyObj) {
      browserifyObj.bundle()
        .pipe(gulp.plugins.vinylSource('bundle.js'))
        .pipe(gulp.plugins.vinylTransform(function () {
          return gulp.plugins.exorcist(destinations.root + 'bundle.js.map')
        }))
        .pipe(gulp.dest(destinations.root))
    }
  })
}
