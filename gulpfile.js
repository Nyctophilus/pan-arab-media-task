const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");
const concat = require("gulp-concat");
const uglify = require("gulp-uglify");
const browserSync = require("browser-sync").create();
const gulpIf = require("gulp-if");
const cssnano = require("cssnano");

// Compile SASS to CSS
gulp.task("sass", function () {
  return gulp
    .src("src/scss/main.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(cleanCSS())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
});

// Function to check if the file name starts with "defer-"
function isDeferFile(file) {
  return file.basename.startsWith("defer-");
}

// Concatenate and minify JavaScript
gulp.task("js", function () {
  return gulp
    .src("src/js/**/*.js")
    .pipe(gulpIf(isDeferFile, concat("main-defer.js"), concat("main.js")))
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(gulp.dest("dist/js"))
    .pipe(browserSync.stream());
});

// Watch files
gulp.task("watch", function () {
  browserSync.init({
    server: {
      baseDir: "./",
    },
  });
  gulp.watch("src/scss/**/*.scss", gulp.series("sass"));
  gulp.watch("src/js/**/*.js", gulp.series("js"));
  gulp.watch("*.html").on("change", browserSync.reload);
});

// Default task
gulp.task("default", gulp.series("sass", "js", "watch"));
