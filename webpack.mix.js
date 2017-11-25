let mix = require('laravel-mix').mix;

mix.options({
    processCssUrls: false
});

mix.sass('assets/sass/calcite.scss', './dist/css')
    .js('assets/js/app.js', './dist/js');

//mix.browserSync();
mix.browserSync({
    proxy: 'http://calcite.dev',
    host: 'calcite.dev',
    open: 'external',
    files: [
        'index.html',
        'dist/css/*.css'
    ]
});