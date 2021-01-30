const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { resolve } = require('path');

const service1Path = resolve(
    __dirname,
    '..',
    'HeaderService',
    'frontend',
    'src',
    'index.jsx'
);

module.exports = {
    entry: [service1Path],

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
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, 'public', 'index.html'),
        }),
        new MiniCssExtractPlugin({ filename: 'style.css' }),
    ],
};
