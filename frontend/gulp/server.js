'use strict';

var gulp = require('gulp');

var util = require('util');

var browserSync = require('browser-sync');

//var middleware = require('./proxy');
var url = require('url');
var proxy = require('proxy-middleware');
var proxyOptions = url.parse('http://localhost:8200/ccgapprovals');
proxyOptions.route = '/ccgapprovals';

function browserSyncInit(baseDir, files, browser) {
  browser = browser === undefined ? 'chrome' : browser;

  var routes = null;
  if(baseDir === 'src' || (util.isArray(baseDir) && baseDir.indexOf('src') !== -1)) {
    routes = {
      // Should be '/bower_components': '../bower_components'
      // Waiting for https://github.com/shakyShane/browser-sync/issues/308
      '/bower_components': 'bower_components'
    };
  }

  browserSync.instance = browserSync.init(files, {
    startPath: '/index.html',
    server: {
      baseDir: baseDir,
      middleware: [proxy(proxyOptions)],
      routes: routes
    },
    browser: browser
  });

}

gulp.task('serve', ['watch'], function () {
  browserSyncInit([
    'src',
    '.tmp'
  ], [
    '.tmp/{app,components}/**/*.css',
    'src/assets/images/**/*',
    'src/*.html',
    'src/{app,components}/**/*.html',
    'src/{app,components}/**/*.js'
  ]);
});

gulp.task('serve:dist', ['build'], function () {
  browserSyncInit('dist');
});

gulp.task('serve:e2e', function () {
  browserSyncInit(['src', '.tmp'], null, []);
});

gulp.task('serve:e2e-dist', ['watch'], function () {
  browserSyncInit('dist', null, []);
});
