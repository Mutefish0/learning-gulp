var gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer')

gulp.task('default',function(){
    console.log('Gulpfile Configured!')
})

gulp.task('style-process',function(){
    return gulp.src('./src/stylesheets/**/*.scss')
    .pipe(sass({outputStyle:'compressed'}).on('erro',sass.logError))
    .pipe(autoprefixer())
    .pipe(gulp.dest('./dist/stylesheets'))
})