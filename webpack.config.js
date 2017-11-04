let webpack = require('webpack');
let path = require('path');

let HtmlWebpackPlugin = require('html-webpack-plugin');

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
            {
                test: /\.tsx$/, enforce: 'pre', loader: 'tslint-loader', options: {
                    emitErrors: false,
                    failOnHint: false,
                    formattersDirectory: 'node_modules/tslint-loader/formatters/',
                    fileOutput: {
                        dir: './lint_out/',
                        ext: 'xml',
                        clean: true,
                        header: '<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<checkstyle version=\"5.7\">',
                        footer: '</checkstyle>'
                    }
                }
            },
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
        })
    ],
};