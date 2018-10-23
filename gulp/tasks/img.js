module.exports = () => {
  $.gulp.task('img:build', () => {
    return $.gulp.src('src/static/img/*.{png,jpg,gif}')
    .pipe($.plugins.tinypng('qH3oVWW7AQ9c9FvsMrFLZLlyrfksPlOm'))
    .pipe($.gulp.dest('build/static/img/'));
  })
  $.gulp.task('img:dev', () => {
    return $.gulp.src('src/static/img/*.{png,jpg,gif}')
    .pipe($.gulp.dest('build/static/img/'));
  })
}
