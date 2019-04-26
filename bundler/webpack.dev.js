const path = require('path')
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: {
        main: ['webpack-hot-middleware/client'],
    },
    output: {
        chunkFilename: '[id].chunk.js',
        filename: '[name].bundle.js',
        path: path.join(process.cwd(), 'bundle'),
        publicPath: '/',
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        (plugin => new plugin({
            openAnalyzer: false,
        }))(require('webpack-bundle-analyzer').BundleAnalyzerPlugin),
    ],
}
