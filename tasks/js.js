var gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    clone = require('gulp-clone'),
    wrap = require('gulp-wrap'),
    concat = require('gulp-concat');

module.exports = function () {
    var stream = gulp.src([
            'node_modules/jquery/dist/jquery.js',
        ])
        .pipe(concat('Resume.js'))
        .pipe(wrap(';(function (window, $, undefined) { <%=contents%> })(window, jQuery);'));

    stream.pipe(clone())
        .pipe(gulp.dest('dist/js'));

    stream.pipe(clone())
        .pipe(uglify())
        .pipe(rename('Resume.min.js'))
        .pipe(gulp.dest('dist/js'))

};