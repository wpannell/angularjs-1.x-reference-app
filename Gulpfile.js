var browser = require('browser-sync');
var del = require('del');
var gulp = require('gulp');
var listGulpTasks = require('gulp-task-listing');
var nodemon = require('gulp-nodemon');
var sync = require('run-sequence');
var todo = require('gulp-todoist');
var webpack = require('webpack-stream');

var paths = {
  app: ['client/app/**/*.{js,styl,html,json}', 'client/styles/**/*.styl'],
  dest: 'dist',
  entry: 'client/app/app.js',
  html: ['client/index.html', 'client/app/**/*.html'],
  js: 'client/app/**/*!(.spec.js).js',
  styl: ['client/app/**/*.styl', 'client/style/**/*.styl'],
  toCopy: ['client/index.html', 'client/**/*.{jpg,png,ico,svg}', 'client/db.json']
};

gulp.task('build', ['todo'], function() {
  return gulp.src(paths.entry)
    .pipe(webpack(require('./webpack.config')))
    .pipe(gulp.dest(paths.dest));
});

gulp.task('clean', function() {
  return del(['dist/**/*.*', 'dist/img', 'generated']);
});

gulp.task('copy', function() {
  return gulp.src(paths.toCopy, { base: 'client' })
    .pipe(gulp.dest(paths.dest));
});

gulp.task('ls', listGulpTasks);

gulp.task('serve', function() {
  browser({
    port: process.env.PORT || 4500,
    open: false,
    ghostMode: false,
    server: {
      baseDir: 'dist'
    }
  });
});

gulp.task('serve-proxy', function() {
  browser.init({
    files: ['dist/**/*.*'],
    proxy: 'http://localhost:6002',
    port: process.env.PORT || 4500,
    open: false
  });
});

gulp.task('serve-node', ['serve-proxy'], function () {
  nodemon({
    script: 'server/server',
    ext: 'js html css',
    ignore: [
      'node_modules',
      'bin',
      'views',
      'public',
      'test',
      'dist'
    ],
    env: {
      'NODE_ENV': 'development'
    },
    stdout: false
  }).on('readable', function() {
  this.stdout.on('data', function(chunk) {
  if (/^server starting on/.test(chunk)) {
        browser.reload();
      }
      process.stdout.write(chunk);
    });
    this.stderr.on('data', function(chunk) {
      process.stderr.write(chunk);
    });
  });
});
gulp.task('todo', function() {
  return gulp.src(paths.js)
    .pipe(todo({silent: false, verbose: true}));
});

gulp.task('watch', function() {
  gulp.watch(paths.app, ['build', browser.reload]);
  gulp.watch(paths.toCopy, ['copy', browser.reload]);
});

//______________________________________________________________________________

gulp.task('default', function(done) {
  sync('dist', 'serve', 'watch', done);
});

gulp.task('dev-node', function(done) {
  sync('dist', 'serve-node', 'watch', done);
});

gulp.task('dist', function(done) {
  sync('clean', 'build', 'copy', done);
});
