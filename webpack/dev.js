const path = require('path');
const webpack = require('webpack')

module.exports = {
    mode: 'development',
    output: {
        chunkFilename: '[id].chunk.js',
        filename: '[name].bundle.js',
        path: path.join(process.cwd(), 'dist'),
        publicPath: '/',
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
    ],
}
