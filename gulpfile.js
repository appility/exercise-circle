var config = require('./gulp-config.json');
var gulp   = require('gulp');
var $      = require('gulp-load-plugins')();
var pug    = require('gulp-pug');
var uglify = require('gulp-uglify');
var responsive = require('gulp-responsive');
var webserver = require('gulp-webserver');
 
var sassPaths = [
  'node_modules/bootstrap/scss/'
];

gulp.task('sass', function() {
  return gulp.src('src/scss/styles.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed'
    })
    .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('compress', function() {
  return gulp.src('js/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

// Starts a test server, which you can view at http://localhost:8888
gulp.task('server', ['default'], function () {
    gulp.src('./public')
            .pipe($.webserver({
                port: 8888,
                host: 'localhost',
                fallback: 'index.html',
                livereload: false,
                open: true
            }))
            ;
});

gulp.task('default', ['sass', 'compress'], function() {
  gulp.watch(['scss/**/*.scss'], ['sass']);
});

gulp.task('start', ['server']);