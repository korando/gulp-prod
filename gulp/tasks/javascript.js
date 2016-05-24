'use strict';

var config = require('../config');
var gulp = require('gulp');
var gulpif = require('gulp-if');
var jshint = require('gulp-jshint');
var uglify = require('gulp-uglify');



gulp.task('javascript', function() {
    return gulp.src(config.scripts.src, { base: './' })
        .pipe(uglify())
        .pipe(gulp.dest('./'));
});
