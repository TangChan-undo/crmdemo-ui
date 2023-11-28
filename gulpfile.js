//  npm i gulp gulp-sass gulp-minify-css -D
const gulp = require('gulp')
// sass转css
const sass = require('gulp-sass')(require('sass')) //sass->css
// 压缩模块
// const minifyCSS = require("gulp-minify-css");
const cleanCSS = require('gulp-clean-css')
// 配置
gulp.task('sass', async function () {
  // 拿到components/css下的所有scss文件;
  return gulp
    .src('components/css/**/*.scss')
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(gulp.dest('dist/css'))
})
