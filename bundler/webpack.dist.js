const path = require('path')

module.exports = {
    mode: 'production',
    output: {
        path: path.join(process.cwd(), 'bundle'),
        chunkFilename: '[id].[chunkhash].js',
        filename: '[id].[hash:12].js',
    },
    plugins: [
        (plugin => new plugin({
            chunks: ['main'],
            filename: './index.html',
            inject: true,
            template: './src/index.html',
        }))(require('html-webpack-plugin')),
    ],
}
