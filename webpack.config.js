'use strict';

var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpackConfigMerger = require('webpack-config-merger');

module.exports = webpackConfigMerger(require('components-example/webpack.config'), {
    entry: './src/app/app.js',
    output: {
        path: './dist',
        filename: '[name].js',
        library: '[name]',
        libraryTarget: 'umd'
    },
    module: {
        preLoaders: [
            {
                test:  /.*\/app\/.*\.js$/,
                loader: 'jshint-loader'
            }
        ]
    },
    plugins : [
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ]
});

console.log(module.exports.module.loaders);