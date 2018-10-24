'use strict'
//Не обязательно объявлять так, можно объявить неглобально, но тогда нужно объявлять в каждом объекте
global.$ = {
  gulp: require('gulp'),
  plugins: require('gulp-load-plugins')(),
  browserSync: require('browser-sync').create(),
  path: {
    tasks: require('./gulp/config/tasks.js')
  }
}

$.path.tasks.forEach(taskPath => {
  require(taskPath)()
})

$.gulp.task('default',$.gulp.series(
  $.gulp.parallel('pug:dev','scripts:dev', 'img:dev', 'sass:dev'),
  $.gulp.parallel('watch:dev', 'serve:dev')
))
$.gulp.task('build',$.gulp.series(
  $.gulp.parallel('pug:build','sass:build','scripts:build', 'img:build', 'svg:build'),
  $.gulp.parallel('watch:build', 'serve:build')
))