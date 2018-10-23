module.exports = () => {
  $.gulp.task('scriptsLib:dev', () => {
    return $.gulp.src(['node_modules/jquery/dist/jquery.min.js',
    'node_modules/slick-carousel/slick/slick.min.js'])
      .pipe($.plugins.concat('libs.min.js'))
      .pipe($.gulp.dest('build/static/js/'))
      .pipe($.browserSync.reload({
        stream:true
      }))
    })

    $.gulp.task('scripts:dev', () => {
      return $.gulp.src('src/static/js/*.js')
        .pipe($.plugins.concat('main.js'))
        .pipe($.gulp.dest('build/static/js/'))
        .pipe($.browserSync.reload({
          stream:true
        }))
      })
    
  $.gulp.task('scriptsLib:build', () => {
    return $.gulp.src(['node_modules/jquery/dist/jquery.min.js',
    'node_modules/slick-carousel/slick/slick.min.js'])
      .pipe($.plugins.concat('libs.min.js'))
      .pipe($.gulp.dest('dist/static/js/'))
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