var gulp = require('gulp');
var sass = require('gulp-sass')

gulp.task('sass', function () {
    gulp.src('./scss/*.scss')
        .pipe(sass({
            includePaths: require('node-bourbon').includePaths
        }))
        .pipe(gulp.dest('./css'));
});

gulp.task('watch', function () {
    gulp.watch('./scss/**/*', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
