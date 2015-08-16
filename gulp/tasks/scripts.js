// Generated by CoffeeScript 1.9.3
(function() {
  var _, browserify, bundleLogger, dependencies, gulp, handleErrors, source, watchify;

  _ = require('lodash');

  gulp = require('gulp');

  browserify = require('browserify');

  watchify = require('watchify');

  source = require('vinyl-source-stream');

  bundleLogger = require('../util/bundleLogger');

  handleErrors = require('../util/handleErrors');

  dependencies = {
    lodash: './node_modules/lodash'
  };

  gulp.task('scripts', function() {
    var clientBundler, rebundle, vendorBundler;
    clientBundler = browserify({
      cache: {},
      packageCache: {},
      entries: './app/js/main.coffee',
      extensions: ['.cjsx', '.coffee']
    });
    _.forEach(dependencies, function(path, dep) {
      return clientBundler.external(dep);
    });
    rebundle = function() {
      bundleLogger.start('client.js');
      return clientBundler.bundle().on('error', handleErrors).pipe(source('client.js')).pipe(gulp.dest('./build/js')).on('end', function() {
        return bundleLogger.end('client.js');
      });
    };
    if (global.isWatching) {
      clientBundler = watchify(clientBundler);
      clientBundler.on('update', rebundle);
    }
    rebundle();
    vendorBundler = browserify({
      cache: {},
      packageCache: {},
      extensions: ['.coffee']
    });
    _.forEach(dependencies, function(path, dep) {
      return vendorBundler.require(path, {
        expose: dep
      });
    });
    bundleLogger.start('vendor.js');
    return vendorBundler.bundle().on('error', handleErrors).pipe(source('vendor.js')).pipe(gulp.dest('./build/js')).on('end', function() {
      return bundleLogger.end('vendor.js');
    });
  });

}).call(this);

//# sourceMappingURL=scripts.js.map
