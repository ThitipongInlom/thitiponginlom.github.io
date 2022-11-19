var gulp = require('gulp'),
    watch = require('gulp-watch');

gulp.task('css', require('./tasks/css'));
gulp.task('js', require('./tasks/js'));

gulp.task('dev', (done) => (
    gulp.series('css')(done),
    gulp.series('js')(done)
));