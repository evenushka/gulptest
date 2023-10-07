let gulp = require('gulp');
let { src, dest } = require('gulp');

// Минимизация css
let cleanCSS = require('gulp-clean-css');
// Минимизация js
let uglify = require('gulp-uglify');
// Компиляция scss
let sass = require('gulp-sass')(require('sass'));
// Переименование минимизированных файлов
let rename = require('gulp-rename');
// Объединение файлов в один
let concat = require('gulp-concat');

function task(cb) {
    return src('src/styles/*.scss')
        .pipe(sass())
        .pipe(concat('bundle.css'))
        .pipe(cleanCSS())
        .pipe(dest('dist/styles'));
}

function minjsu(cb) {
    return src('src/scripts/*.js')
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(dest('dist'));
}

function clear(cb) {
    return deleteAsync('dist/*');
}

exports.default = task;
exports.minjsu = minjsu;
exports.clear = clear;