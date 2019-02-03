var gulp = require('gulp'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    clone = require('gulp-clone'),
    minify = require('gulp-minify-css'),
    concat = require('gulp-concat');

module.exports = function () {
    var stream = gulp.src('./src/scss/**/*.scss')
        .pipe(concat('Resume.scss'))
        .pipe(sass().on('error', sass.logError))
        .pipe(postcss([autoprefixer]));

    stream.pipe(clone())
        .pipe(minify())
        .pipe(rename('Resume.min.css'))
        .pipe(gulp.dest('dist/css'));

    stream.pipe(clone())
        .pipe(rename('Resume.css'))
        .pipe(gulp.dest('dist/css'))
};