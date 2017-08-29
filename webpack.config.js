let HtmlWebpackPlugin = require('html-webpack-plugin');
let path = require('path');
let webpack = require('webpack');

module.exports = {
    entry: {
        vendor: './src/vendor',
        main: './src/main'
    },

    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'build')
    },

    devtool: 'source-map',

    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },

    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: [
                'main',
                'vendor',

                'manifest'
            ]
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html'
        }),
    ]
};