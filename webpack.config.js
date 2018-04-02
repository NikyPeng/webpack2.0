/**
 * Created by glzc on 2017/10/27.
 */
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        "demo_01": './src/demo_01/js/index.js',
        "demo_02": './src/demo_02/js/index.js',
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name]/js/index.js'
    },
    module: {
        rules: [
            {test: /\.css$/,use: ExtractTextPlugin.extract({fallback: {loader: "style-loader",options: {minimize: true}},use: {loader: "css-loader",options: {minimize: true}}})},
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: (arg) => {
                                let url = arg.split('/');
                                return url.splice(url.length - 2).join('/')
                            }
                        }
                    },
                    {loader: 'extract-loader'},
                    {loader: 'html-loader',options: {attrs: ['img:src'],minimize: true}}
                ]
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        fallback: 'file-loader',
                        name: (arg) => {
                            let url = arg.split('/');
                            return url.splice(url.length - 3).join('/')
                        }
                    }
                }
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|brower_components)/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'],
                        plugins: [require('babel-plugin-transform-object-rest-spread'),require('babel-plugin-transform-runtime')],
                    }
                }]
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: (getPath) => {
                let url = '';
                if(getPath('[name]/css/demoStyle.css').indexOf('01') > -1){
                    url = getPath('[name]/css/demoStyle.css');
                }else{
                    url = getPath('[name]/css/style.css');
                }
                return url
            },
            allChunks: true,
        }),
        new HtmlWebpackPlugin({
            title: '易通贷',
            filename: '',
            template: '',
            favicon: '',
            inject: true,
            hash: true,
            minify: {
                removeComments: true,
            },
        }),
    ]
};