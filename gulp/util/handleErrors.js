// Generated by CoffeeScript 1.9.3
(function() {
  var notify;

  notify = require('gulp-notify');

  module.exports = function() {
    var args;
    args = Array.prototype.slice.call(arguments);
    notify.onError({
      title: 'Compile Error',
      message: '<%= error %>'
    }).apply(this, args);
    return this.emit('end');
  };

}).call(this);

//# sourceMappingURL=handleErrors.js.map
