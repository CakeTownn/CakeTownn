let mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js/edit.js').sass('resources/scss/app.scss', 'public/css/style.css');