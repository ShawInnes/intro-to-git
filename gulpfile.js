'use strict';

var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    livereload: true
  });
});

var paths = {
  src: ['src/*'],
  js: ['bower_components/reveal.js/js/*'],
  css: ['bower_components/reveal.js/css/**/*.css']
};

gulp.task('js', function() {
  return gulp.src(paths.js)
    .pipe(gulp.dest('dist/js'));
});

gulp.task('css', function() {
  return gulp.src(paths.css)
    .pipe(gulp.dest('dist/css'));
});

gulp.task('src', function() {
  return gulp.src(paths.src)
    .pipe(gulp.dest('dist/'))
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch(paths.src, ['src']);
});

gulp.task('default', ['connect', 'watch', 'js', 'css', 'src']);
