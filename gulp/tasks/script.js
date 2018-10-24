module.exports = () => {

    $.gulp.task('scripts:dev', () => {
      return $.gulp.src('src/static/js/*.js')
        .pipe($.plugins.concat('main.js'))
        .pipe($.gulp.dest('build/static/js/'))
        .pipe($.browserSync.reload({
          stream:true
        }))
      })

    $.gulp.task('scripts:build', () => {
      return $.gulp.src('src/static/js/*.js')
        .pipe($.plugins.concat('main.js'))
        .pipe($.gulp.dest('dist/static/js/'))
        .pipe($.browserSync.reload({
          stream:true
        }))
    })
  }