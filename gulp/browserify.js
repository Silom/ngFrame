'use strict';

module.exports = function (gulp, plugins, sources, destinations) {
  // Requires : 'sources.root.js', 'destinations.js'

  var browserify = plugins.browserify({
    cache: {},
    packageCache: {},
    fullPaths: true,
    debug: gulp.configs.isProduction ? false : true
  })
  browserify.add(sources.root.js)
  // Jade compile via require()
  browserify.transform('jadeify')

  // Browserify build and concat (We use watchify for browserify, so we dont lose performance)
  gulp.task('browserify:watch', ['browserify:build'], function() {
    browserify = plugins.watchify(browserify)
    .on('update', function() {
      gulp.start('browserify:build')
    })
  })

  gulp.task('browserify:build', function (callback) {
    browserify.bundle()
    .on('error', function(err){
      plugins.gutil.log(plugins.gutil.colors.red(err.message))
      this.emit('end')
    })
    .pipe(plugins.source('bundle.js'))
    .pipe(
      gulp.configs.isProduction ?
      plugins.gutil.noop() :
      plugins.transform(function () {
        return plugins.exorcist(destinations.js + 'bundle.js.map')
      })
    )
    .pipe(gulp.dest(destinations.js))

    callback(null)
  })
}
