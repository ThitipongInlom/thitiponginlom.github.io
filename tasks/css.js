var gulp = require('gulp'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    clone = require('gulp-clone'),
    minify = require('gulp-minify-css'),
    concat = require('gulp-concat'),
    merge = require('merge2');

module.exports = function () {
    var stream = gulp.src([
            './src/scss/**/*.scss',  // Scss Resume
            'node_modules/@fortawesome/fontawesome-free/css/all.css', // @fortawesome
            'node_modules/bootstrap/dist/css/bootstrap.css', // @Bootstrap
            'node_modules/simplebar/dist/simplebar.css', // @simplebar
        ])
        .pipe(concat('Resume.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer]));

    return merge(stream)
            .pipe(minify())
            .pipe(rename('Resume.min.css'))
            .pipe(gulp.dest('dist/css'))

            .pipe(clone())
            .pipe(rename('Resume.css'))
            .pipe(gulp.dest('dist/css'))
};