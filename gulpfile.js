//Пакеты
const {src, dest, watch, series, parallel} = require('gulp');
const browserSync = require ('browser-sync').create()
//Плагины
const htmlmin = require ('gulp-htmlmin');
const size = require ('gulp-size')
//Обработчик HTML
const html = () => {
  return src('./src/html/*.html')
  .pipe(size({
    title: 'Before min',
  }))
  .pipe(htmlmin({
    collapseWhitespace: true
  }))
  .pipe(size({
    title: 'After min',
  }))
  .pipe(dest('./public'))
  .pipe(browserSync.stream());
}

//Сервер
const server = () => {
  browserSync.init({
    server: {
      baseDir: './public',
    }
  })
}

//Наблюдение
const watcher = () => {
  watch('./src/html/*.html', html)
}

//Задачи
exports.html = html;
exports.watcher = watcher;
exports.dev = series(
  html,
  parallel(watcher, server)
)