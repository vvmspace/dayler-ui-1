const Assets = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpackMerge = require('webpack-merge')
const webpack = require('webpack')

const options = {
    resolve: {
        extensions: ['.js', '.html'],
        modules: ['node_modules', 'src'],
    },
    resolveLoader: {
        modules: ['node_modules', 'src'],
    },
    entry: {
        main: ['./src/index.js'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'stage-0', 'react'],
                        plugins: ['transform-decorators-legacy'],
                    },
                }],
            },
            {
                test: /\.styl/,
                use: [{
                    loader: 'style-loader',
                }, {
                    loader: 'css-loader',
                    options: {
                        camelCase: 'only',
                        modules: true,
                    }
                }, {
                    loader: 'stylus-loader',
                }],
            },
            {
                test: /\.(eot|svg|cur)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[hash:20].[ext]',
                    limit: 10000,
                },
            }, {
                test: /\.(jpg|png|webp|gif|otf|ttf|woff|woff2|ani)$/,
                loader: 'url-loader',
                options: {
                    name: '[name].[hash:20].[ext]',
                    limit: 10000,
                },
            },
        ],
    },
    plugins: [
        new Assets([{ to: '', from: 'src/assets' }], {
            ignore: ['.gitkeep', '**/.DS_Store', '**/Thumbs.db'],
            debug: 'warning',
        }),
        new HtmlWebpackPlugin({
            filename: './index.html',
            template: './src/index.html',
            inject: 'body',
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
    ],
}

module.exports = process.env.NODE_ENV !== 'production'
    ? webpackMerge(options, require('./dev'))
    : webpackMerge(options, require('./dist'))
