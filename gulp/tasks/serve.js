module.exports = () => {
  $.gulp.task('serve:dev', function() {
    $.browserSync.init({
        server: {
            baseDir: "./build"
        }
    })
    $.browserSync.watch('build', $.browserSync.reload)
  })

  $.gulp.task('serve:build', function() {
    $.browserSync.init({
        server: {
            baseDir: "./dist"
        }
    })
    $.browserSync.watch('dist', $.browserSync.reload)
  })
} 