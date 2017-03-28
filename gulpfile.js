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

var config = {
    filename: 'home',
    src: ['./src/app/*.js', './src/app/**/*.js'],
    srcHtml: ['./src/app/views/*.html', './src/app/views/**/*.html'],
    srcIndexHtml: ['src/index.html',],
    srcCss: ['./src/content/*.css', './src/content/**/*.css'],
    images: './src/media/**/*',
    dest: './src/dist',
    umd: {

    },
    banner: ['/**',
        ' * <%= pkg.name %> - <%= pkg.description %>',
        ' * @author <%= pkg.author %>',
        ' * @version v<%= pkg.version %>',
        ' * @link <%= pkg.homepage %>',
        ' * @license <%= pkg.license %>',
        ' */',
        ''
    ].join('\n')
};


gulp.task('js-min', () =>
    gulp.src('src/app/*.jsx')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulp.dest('src/dist'))
);

gulp.task('build', ['js-min', 'styles', 'html']);//colocar otras task
gulp.task('default', ['js-min', 'serve-browser-sync']);//colocar otras task