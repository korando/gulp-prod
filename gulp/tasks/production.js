'use strict';

var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('prod', function(cb) {

    cb = cb || function() {};

    global.isProd = true;

    //runSequence('styles', 'javascript', 'fonts', 'images', 'views', 'copy', 'sitemap', cb);
    runSequence('javascript', 'images', 'styles', cb);
});
