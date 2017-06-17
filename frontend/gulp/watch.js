'use strict';

var gulp = require('gulp');

gulp.task('watch', ['compass'] ,function () {
  gulp.watch('src/sass/**/*.scss', ['compass']);
  gulp.watch('src/{app,components}/**/*.js', ['scripts']);
  gulp.watch('src/assets/images/**/*', ['images']);
  gulp.watch('bower.json', ['wiredep']);
});
