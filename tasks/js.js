var gulp = require('gulp'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify'),
    clone = require('gulp-clone'),
    wrap = require('gulp-wrap'),
    concat = require('gulp-concat'),
    merge = require('merge2');

module.exports = function () {
    var jquery = gulp.src('node_modules/jquery/dist/jquery.js');
    var simplebar = gulp.src('node_modules/simplebar/dist/simplebar.js');
    var stream = gulp.src([
            './src/js/**/*.js', // Js Resume
            'node_modules/@fortawesome/fontawesome-free/js/all.js', // @fortawesome
            'node_modules/bootstrap/dist/js/bootstrap.js', // @Bootstrap
            'node_modules/bootstrap/dist/js/bootstrap.bundle.js', // @Bootstrap
        ])
        .pipe(concat('Resume.js'))
        .pipe(wrap(';(function (window, $, undefined) { <%=contents%> })(window, jQuery);'));
    
    return merge(jquery, simplebar, stream)
            .pipe(clone())
            .pipe(gulp.dest('dist/js'))

            .pipe(clone())
            .pipe(uglify())
            .pipe(rename('Resume.min.js'))
            .pipe(gulp.dest('dist/js'))

};