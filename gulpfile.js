let gulp = require('gulp');
let { src, dest } = require('gulp');

// Минимизация css
let cleanCSS = require('gulp-clean-css');
// Минимизация js
let uglify = require('gulp-uglify');

function task(cb) {
    let files = [
        'src/styles/*.css',
    ];

    return(files)
        .pipe(cleanCSS())
        .pipe(dest('dist'));
}

function minjsu(cb) {
    return src('src/scripts/script1.js')
        .pipe(uglify())
        .pipe(dest('dist/scripts'));
}

exports.default = task;
exports.minjsu = minjsu;