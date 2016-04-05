
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('hi', function () {
  console.log('hi!!');
});

gulp.task('sass', function () {
  return gulp.src('app/sass/styles.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'))
})

gulp.task('js', function () {
  return gulp.src(['app/**/*.js', '!app/js/bundle.js'])
    .pipe(concat('bundle.js'))
    .pipe(gulp.dest('app/js'))
})

gulp.task('serve', ['sass', 'js'], function () {
  gulp.watch('app/sass/styles.scss', ['sass']);
  gulp.watch(['app/**/*.js', '!app/js/bundle.js'], ['js'])
})
