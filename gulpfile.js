const gulp = require('gulp');
const babel = require('gulp-babel');



var browserSync = require('browser-sync'),
    reload = browserSync.reload;

// ////////////////////////////////////////////////
// Browser-Sync Tasks
// 
// // /////////////////////////////////////////////
gulp.task('serve-browser-sync', () => {
    browserSync({
        port: 9001,
        host: '127.0.0.1',
        server: {
            baseDir: "src"
        },
        browser: ["chrome"], // , " firefox"
        uiquitar: { //el admin UI de browser-sync server
            port: 3001
        },
        ui: false,
    });

    gulp.watch([
        './src/app/*.*',
        './src/content/*.*',
        './src/media/*.*',
        './src/*.*'
    ]).on('change', reload);
}

);

gulp.task('js-min', () =>
    gulp.src('src/app/*.jsx')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('src/dist'))
);

gulp.task('build', ['js-min', 'styles', 'html']);//colocar otras task
gulp.task('default', ['js-min', 'serve-browser-sync']);//colocar otras task