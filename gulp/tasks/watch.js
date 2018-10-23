module.exports = () => {
  $.gulp.task('watch:dev', () => {
    //** - все папки/
    $.gulp.watch('src/pug/**/*.pug', $.gulp.series('pug:dev'))
    $.gulp.watch('src/static/sass/**/*.sass', $.gulp.series('sass:dev'))
    $.gulp.watch('src/static/js/main.js', $.gulp.series('scripts:dev'))
    $.gulp.watch('src/static/img/*', $.gulp.series('img:dev'))
  })

  $.gulp.task('watch:build', () => {
    //** - все папки/
    $.gulp.watch('src/pug/**/*.pug', $.gulp.series('pug:build'))
    $.gulp.watch('src/static/sass/**/*.sass', $.gulp.series('sass:build'))
    $.gulp.watch('src/static/js/main.js', $.gulp.series('scripts:build'))
    $.gulp.watch('src/static/img/*', $.gulp.series('img:build'))
  })
} 