const gulp = require('gulp')
const ghPages = require('gulp-gh-pages')

gulp.task('deploy', () => {
  return gulp
    .src('./dist/**/*')
    .pipe(ghPages())
})
