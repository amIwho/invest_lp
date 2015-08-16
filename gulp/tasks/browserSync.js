// Generated by CoffeeScript 1.9.3
(function() {
  var browserSync, gulp;

  gulp = require('gulp');

  browserSync = require('browser-sync');

  gulp.task('browserSync', function() {
    return browserSync({
      port: 9000,
      open: true,
      server: {
        baseDir: ['./build', './app']
      },
      files: ['./build/**']
    });
  });

}).call(this);

//# sourceMappingURL=browserSync.js.map