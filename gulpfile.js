'use strict';

var gulp = require('gulp'),
    gutil = require('gulp-util'),
    gulpif = require('gulp-if'),
    sass = require('gulp-sass'),
    plumber = require('gulp-plumber'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    sassGlob = require('gulp-sass-glob'),
    sourcemaps = require('gulp-sourcemaps'),
    browserSync = require('browser-sync').create();



/* ==========================================================================
   Configuration
   ========================================================================== */

var config = {
    assetDir: 'assets',
    debug: true
};


/* ==========================================================================
   Main task. Run this by entering 'gulp' in the root of the theme (terminal).
   ========================================================================== */

gulp.task('watch', ['sass-theme'], function () {
    gulp.watch(config.assetDir + '/styles/**/*.scss', ['sass-theme']);
    gulp.watch( '**/*.html').on('change', browserSync.reload);
});

gulp.task('default', ['browser-sync', 'watch']);

gulp.task('disable-config', function () {
   config.debug = false;
});
gulp.task('sass', ['sass-theme']);
gulp.task('build', ['disable-config', 'browserify', 'sass']);

/* ==========================================================================
   Error handling
   ========================================================================== */

function onError(e) {
    gutil.beep();
    gutil.log(e);
    this.emit('end');
}

function onBrowserifyError(err) {
    gutil.beep();
    gutil.log(err.toString());
    this.emit('end');
}

/* ==========================================================================
   SASS
   ========================================================================== */
gulp.task('sass-theme', function () {
    return gulp
        .src(config.assetDir + '/styles/main.scss')
        .pipe(plumber(onError))
        .pipe(sourcemaps.init())
        .pipe(sassGlob())
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', 'IE > 8'],
            cascade: false
        }))
        .pipe(rename({basename: 'theme'}))
        .pipe(sourcemaps.write('', {addComment: config.debug, debug:config.debug}))
        .pipe(plumber.stop())
        .pipe(gulp.dest('dist/css/'))
        .pipe(browserSync.stream());
});



// /* ==========================================================================
//    JavaScript (Browserify & Watchify)
//    ========================================================================== */
//
// gulp.task('watchify', function () {
//     var opts = assign({}, watchify.args, {
//         debug: config.debug,
//         entries: [config.assetDir + '/js/theme/theme.js']
//     });
//     var watcher = watchify(browserify(opts)
//         .transform(babelify.configure({
//             presets: ['es2015']
//         }))
//     );
//
//     function bundle() {
//         return watcher.bundle()
//             .on('error', onBrowserifyError)
//             .pipe(source('theme.js'))
//             .pipe(buffer())
//             .pipe(gulpif(config.debug, sourcemaps.init({loadMaps: true})))
//             .pipe(gulpif(!config.debug, uglify()))
//             .pipe(rename({basename: 'theme'}))
//             .pipe(gulpif(config.debug, sourcemaps.write('.')))
//             .pipe(gulp.dest('dist/js/'))
//             .pipe(browserSync.stream());
//     }
//
//     bundle();
//
//     watcher.on('update', bundle);
//     watcher.on('log', gutil.log);
// });
//
// gulp.task('browserify', function () {
//     var opts = assign({}, watchify.args, {
//         debug: config.debug,
//         entries: [config.assetDir + '/js/theme/theme.js']
//     });
//     var b = browserify(opts)
//         .transform(babelify.configure({
//             presets: ['es2015']
//         }));
//
//     return b.bundle()
//         .on('error', onBrowserifyError)
//         .pipe(source('theme.js'))
//         .pipe(buffer())
//         .pipe(gulpif(config.debug, sourcemaps.init({loadMaps: true})))
//         .pipe(gulpif(!config.debug, uglify()))
//         .pipe(rename({basename: 'theme'}))
//         .pipe(gulpif(config.debug, sourcemaps.write('.')))
//         .pipe(gulp.dest('dist/js/'))
//         .pipe(browserSync.stream());
// });

/* ==========================================================================
   Browser Sync
   ========================================================================== */

gulp.task('browser-sync', function() {
  browserSync.init({
      proxy: 'http://mustreads.dev'
  });
});
