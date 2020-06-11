const gulp = require("gulp");
const ejs = require("gulp-ejs");
const rename = require("gulp-rename");
const connect = require("gulp-connect");
const sass = require("gulp-sass");
const postcss = require('gulp-postcss');    
const imagemin = require('gulp-imagemin');

sass.compiler = require('node-sass');

function html(done) {
    gulp.src('./assets/html/templates/*.ejs')
        .pipe(ejs())
        .pipe(rename(function(path){
            if(path.basename != "index") {
                path.dirname = path.basename;
                path.basename = "index";
            } 
                path.extname = ".html";
        }))
        .pipe(gulp.dest('./dist'))
        .pipe(connect.reload());
        done()
}

function watchHtml(done) {
    gulp.watch("./assets/html/**/*.ejs", { ignoreInitial: false }, html);
}

function scss(done) {
    gulp.src('./assets/css/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./dist/assets/css'))
        .pipe(connect.reload());
    done();
}

function watchScss(done) {
    gulp.watch('./assets/css/**/*.scss', { ignoreInitial: false }, scss);
}

function js(done){
    gulp.src('./assets/js/**/*.js')
    .pipe(gulp.dest('./dist/assets/javascript'))
    .pipe(connect.reload());
    done();
}

function watchJs(done) {
    gulp.watch('./assets/js/**/*.js', { ignoreInitial: false }, js);
}

function images(done) {
    gulp.src('./src/images/*')
        .pipe(imagemin())
        .pipe(gulp.dest('./dist/assets/images'))
        .pipe(connect.reload());
    done();
}

function WatchImages(done) {
    gulp.watch('./src/images/*', { ignoreInitial: false }, images);
}

gulp.task('dev', function(done){
    watchHtml();
    watchScss();
    watchJs();
    WatchImages();
    connect.server({
        livereload: true,
        root: "dist"
    })
    done();
});

gulp.task('build', function(done) {
    html(done);
    scss(done);
    js(done);
    images(done);
    done();
});