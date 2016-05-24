'use strict';

const config = require('../config');
const changed = require('gulp-changed');
const gulp = require('gulp');
const gulpif = require('gulp-if');
const imagemin = require('gulp-imagemin');
const pngquant = require('imagemin-pngquant');

gulp.task('images', function() {

    const dest = config.images.dest;

    if (global.isProd == false) {
        return gulp.src(config.images.src, { base: './' })
            //.pipe(changed(config.images.dest)) // Ignore unchanged files
            .pipe(gulp.dest('./'));
    } else {
        return gulp.src(config.images.src, { base: './' })
            //.pipe(changed(config.images.dest)) // Ignore unchanged files
            .pipe(imagemin({
                progressive: true,
                svgoPlugins: [{ removeViewBox: false }],
                use: [pngquant({ quality: '65-80', speed: 1 })]
            })) // Optimize
            .pipe(gulp.dest('./'));
    }
});

