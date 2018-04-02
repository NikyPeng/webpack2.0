/**
 * Created by glzc on 2018/3/20.
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'production',
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
        chunkFilename: '[name].bundle.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '易通贷',
            template: path.resolve(__dirname, 'index.html')
        }),
    ]
}