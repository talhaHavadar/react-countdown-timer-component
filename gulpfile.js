var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');




gulp.task('build', function() {

    return browserify(
        {
            entries: './app.jsx',
            extensions: ['.jsx'],
            debug: true
        }
    ).transform('babelify', { presets: ['es2015', 'react']})
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'));

});

gulp.task('sass', function() {
    return gulp.src(['./stylesheets/sass/**/*.scss', './stylesheets/sass/**/*.sass'])
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./stylesheets/css'));
});

gulp.task('watch', ['build', 'sass'], function(){
    gulp.watch(['./stylesheets/sass/**/*.scss','./stylesheets/sass/**/*.sass'], ['sass']);
    gulp.watch(['*.jsx','components/*.jsx'], ['build']);
});

gulp.task('default', ['watch']);
