'use strict';

module.exports = function (gulp, plugins, sources, destinations) {
  gulp.task('clean', function(callback) {
    plugins.rm(destinations.root, callback)
  })
}
