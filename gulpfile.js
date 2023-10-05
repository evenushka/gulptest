// Подключаем к файлу библиотеку gulp
let gulp = require('gulp');

// Задача и коллбэк
// Коллбэк - функция, которая вызывается в конце задачи. Уведомляет gulp о том, что задача завершена и можно приступать к следующей.
// Если return то коллбэк не нужен.
// Задача #1 - вывести в консколь текущее вемя.
// Задача #2 - вывести в консоль текущий день, месяц, год создав 3 разных задачи.
const currentDate = new Date();
function task(cb) {
    console.log(currentDate);
    cb();
}

function day(cb) {
    console.log(currentDate.getDay());
    cb();
}

function month(cb) {
    console.log(currentDate.getMonth());
    cb();
}

function year(cb) {
    console.log(currentDate.getFullYear());
    cb();
}

// Задача #3 - вызвать функции трех приватных задач в одной публичной.
// У нас есть одна задача для экспорта (exports.getDayMonthYear = getDayMonthYear;) - публичная, и две вспомогательные,
// Приватные задачи, использующиеся внутри публичной функции.
function getDayMonthYear(cb) {
    day(cb);
    month(cb);
    year(cb);
    cb();
}

// Команды в консоль.
// Основная задача, одна на файл, экспортируется по умолчанию.
exports.default = task;
// Публичные задачи, запускаются через командрную строку пр.("gulp day").
exports.day = day;
exports.month = month;
exports.year = year;
// Экспортируем задачу, содержащую внутри себя другие задачи.
exports.getDayMonthYear = getDayMonthYear;