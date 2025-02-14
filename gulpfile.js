const gulp =require('gulp');
const sass =require('gulp-sass')(require('sass')); //sass 转 css的库
const minifyCSS =require('gulp-minify-css');// 压缩css代码的库


//gulp的配置
gulp.task('sass',async function(){
    return gulp.src('components/css/**/*.scss')
        .pipe(sass())
        .pipe(minifyCSS())
        .pipe(gulp.dest('dist/css'))


})