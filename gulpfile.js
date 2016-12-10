'use strict';
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const inlinesource = require('gulp-inline-source');
const htmlmin = require('gulp-htmlmin');

const paths = {
  html : ['src/**/*.html'],
  styles : ['src/**/css/**/*.css'],
  scripts : ['src/**/js/**/*.js'],
  images : ['src/**/*.{jpg,png}'],
  dist : 'dist',
  site : 'https://carltonwin8.github.io/frontend-nanodegree-mobile-portfolio/'
}

gulp.task ('html', function () {
  return gulp.src(paths.html, {base: "./src"})
    .pipe(inlinesource())
    .pipe(htmlmin({
      removeComments: true,
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true
     }))
    .pipe(gulp.dest(paths.dist))
});

gulp.task ('styles', function () {
  return gulp.src(paths.styles, {base: "./src"})
    .pipe(gulp.dest(paths.dist))
});

gulp.task ('scripts', function () {
  return gulp.src(paths.scripts, {base: "./src"})
    .pipe(gulp.dest(paths.dist))
});

gulp.task ('images', function () {
  return gulp.src(paths.images, {base: "./src"})
    .pipe(gulp.dest(paths.dist))
});

gulp.task ('browser-sync', function () {
  browserSync.init({ server: { baseDir: "./dist" } })
});

gulp.task ('watch', function () {
  gulp.watch(paths.build).on('change', browserSync.reload)
  gulp.watch(paths.html,['html']).on('change', browserSync.reload);
  gulp.watch(paths.styles,['styles']).on('change', browserSync.reload);
  gulp.watch(paths.scripts,['scripts']).on('change', browserSync.reload);
  gulp.watch(paths.images,['images']).on('change', browserSync.reload);
});

gulp.task ('default',
  ['html', 'styles', 'scripts', 'images', 'browser-sync','watch']
);
