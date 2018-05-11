const path = require('path');
const Uglify = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'production',
    output: {
        path: path.join(process.cwd(), 'lib'),
        filename: 'index.min.js',
        library: 'daylerUi',
        libraryTarget: 'umd',
    },
    resolve: {
        extensions: ['.js'],
        modules: ['node_modules'],
    },
    resolveLoader: {
        modules: ['node_modules'],
    },
    entry: {
        main: ['./src/ui/index.js'],
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
                        importLoaders: 2,
                        modules: true,
                    },
                }, {
                    loader: 'postcss-loader',
                    options: {
                        plugins: [
                            autoprefixer({
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
            },
        ],
    },
    plugins: [
        new Uglify(),
    ],
};
