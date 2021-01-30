const common = require('./webpack.common');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { merge } = require('webpack-merge');
const { resolve } = require('path');

module.exports = merge(common, {
    mode: 'production',
    output: {
        filename: '[name].bundle.js',
        path: resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    plugins: [new CleanWebpackPlugin()],
    performance: {
        maxEntrypointSize: 512000,
        maxAssetSize: 512000,
    },
});
