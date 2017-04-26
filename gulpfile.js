var gulp = require('gulp-help')(require('gulp'));

// the default task.
gulp.task('default', ['help']);

gulp.task('hello', 'Hello Gulp World!', function() {
  // place code for your default task here
  console.log('Hello Gulp World!');
});

// using the express to serve static files.
var gls = require('gulp-live-server');
// the simplest express static server.
//var liveServer = gls.static('.', 8900);
// using a simple javascript file for express server.
var liveServer = gls.new('test/express.js');
gulp.task('express-app', 'TBD: Load the local Express server', function() {

    liveServer.start();
});
