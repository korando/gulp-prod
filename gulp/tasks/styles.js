'use strict';

var config = require('../config');
var gulp = require('gulp');
var cleanCSS = require('gulp-clean-css');

gulp.task('styles', function() {
    return gulp.src(config.styles.src, { base: './' })
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('./'));
});
