const { resolve } = require('path');
const {
    header,
    hostedby,
    headerNodeModules,
    hostedbyNodeModules,
} = require('./servicePaths');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
    .BundleAnalyzerPlugin;

module.exports = {
    entry: {
        header,
        hostedby,
    },
    module: {
        rules: [
            { test: /\.jsx$/, use: 'babel-loader', exclude: /node_modules/ },
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
            {
                test: /\.svg$/,
                use: 'file-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.jsx', '.js'],
        modules: [headerNodeModules, hostedbyNodeModules],
    },
    optimization: {
        splitChunks: {
            name: 'common',
            chunks: 'all',
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'public', 'index.html'),
        }),
        new MiniCssExtractPlugin({ filename: 'style.css' }),
        new BundleAnalyzerPlugin(),
    ],
};
