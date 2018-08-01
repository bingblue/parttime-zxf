module.exports = {
  css: {
    src: ['../src/less/*.+(css|styl|stylus|less|sass|scss)'],
    dest: '../src/css'
  },
  js: {
    src: ['../src/js/*.js', '!../src/js/jquery-3.3.1.min.js'],
    dest: '../src/js'
  },
  html: {
    src: ['../src/html/**/*.html', '!../src/html/part/*.html', '!../src/html/页面编号_模板取名.html'],
    dest: '../src/html/',
    watch: '../src/html/part/*.html'
  },
  watch: {
    src: '../src/+(js|css)/**/*.**'
  },
  clean: {
    src: ['../src/css/**/*.css', '!../src/css/normalize.css', '!../src/css/style.css']
  },
  server: {
    src: ['../src/+(js|css)/**/*.min.**', '../src/**/*.html']
  }
}
