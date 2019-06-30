const path = require('path')

module.exports = {
    mode: 'production',
    output: {
        path: path.join(process.cwd(), 'dist'),
        filename: 'index.min.js',
        library: 'dayler-ui',
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: ['.js', '.html', '.styl'],
        modules: ['node_modules'],
    },
    resolveLoader: {
        modules: ['node_modules'],
    },
    entry: {
        main: ['./src/lib/index.js'],
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
                    },
                }, {
                    loader: 'postcss-loader',
                    options: {
                        plugins: [
                            require('autoprefixer'),
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
            },
        ],
    },
}
