module.exports = () => {
  var sass = require('gulp-sass')
  $.gulp.task('sass:dev', () => {
    return $.gulp.src('src/static/sass/*.sass')
    .pipe(sass().on('error', sass.logError))
    .pipe($.gulp.dest('build/static/css'))
    .pipe($.browserSync.reload({
      stream:true
    }))
  })

  var sass = require('gulp-sass')
  $.gulp.task('sass:build', () => {
    return $.gulp.src('src/static/sass/*.sass')
    .pipe($.plugins.sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe($.plugins.autoprefixer({
      browsers: ['last 10 versions'],
    }))
    .on("error", $.plugins.notify.onError({
      message: "Error: <%= error.message %>",
      title: "Error style"
    }))
    .pipe($.plugins.csso())
    .pipe($.plugins.sourcemaps.write())
    .pipe($.plugins.concat('main.css'))
    .pipe($.gulp.dest('dist/static/css'))
    .pipe($.browserSync.reload({
      stream:true
    }))
  })
} 