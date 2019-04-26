const path = require('path')
const webpack = require('webpack')
const webpackMerge = require('webpack-merge')

const DEBUG = process.env.NODE_ENV !== 'production'

const options = {
    resolve: {
        extensions: ['.js', '.jsx', '.html', '.styl'],
        modules: ['node_modules', 'src'],
        alias: {
            'dayler-ui': path.resolve(__dirname, '../src/lib'),
            'src': path.resolve(__dirname, '../src'),
            'react-dom': '@hot-loader/react-dom',
        },
    },
    resolveLoader: {
        modules: ['node_modules', 'src'],
    },
    entry: {
        main: ['./src/main.js'],
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: [{
                    loader: 'babel-loader',
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
                        importLoaders: 2,
                        modules: true,
                        localIdentName: DEBUG
                            ? '[path][name]__[local]--[hash:base64:5]'
                            : '[hash:base64]',
                    },
                }, {
                    loader: 'postcss-loader',
                    options: {
                        plugins: [
                            require('autoprefixer')({
                                browsers:['ie >= 8', 'last 4 version'],
                            }),
                        ],
                    },
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
            }, {
                test: /\.example$/,
                loader: 'raw-loader',
            },
        ],
    },
    plugins: [
        (plugin => new plugin([{ to: '', from: 'src/assets' }], {
            ignore: ['.gitkeep', '**/.DS_Store', '**/Thumbs.db'],
            debug: 'warning',
        }))(require('copy-webpack-plugin')),
        (plugin => new plugin([{ to: '', from: 'src/workers' }], {
            ignore: ['.gitkeep', '**/.DS_Store', '**/Thumbs.db'],
            debug: 'warning',
        }))(require('copy-webpack-plugin')),
        (plugin => new plugin({
            filename: './index.html',
            template: './src/index.html',
            inject: 'body',
        }))(require('html-webpack-plugin')),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
            },
        }),
    ],
}

module.exports = process.env.NODE_ENV !== 'production'
    ? webpackMerge(options, require('./webpack.dev'))
    : webpackMerge(options, require('./webpack.dist'))
