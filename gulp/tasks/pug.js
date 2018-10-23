module.exports = () => {
  $.gulp.task('pug:dev', () => {
    return $.gulp.src('src/pug/pages/*.pug')
    .pipe($.plugins.pug({
      pretty:true
    }))
    .pipe($.gulp.dest('build'))
    .on('end', $.browserSync.reload)
  })

  $.gulp.task('pug:build', () => {
    return $.gulp.src('src/pug/pages/*.pug')
    .pipe($.plugins.pug({
      pretty:true
    }))
    .pipe($.gulp.dest('dist'))
    .on('end', $.browserSync.reload)
  })
}