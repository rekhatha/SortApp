'use strict';

var gulp = require('gulp');

require('require-dir')('./gulp');

gulp.task('default', ['clean'], function () {
    gulp.start('build');
});


var compass = require('gulp-compass');

gulp.task('compass', function() {
  gulp.src('src/sass/*.scss')
    .pipe(compass({
      config_file: 'src/sass/config.rb',
      css: 'src/assets/css',
      sass: 'src/sass'
    }))
    .pipe(gulp.dest('app/assets/css'));
});