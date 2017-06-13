const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	entry : {
		demo_01 : './src/demo_01/js/index.js',
		demo_02 : './src/demo_02/js/index.js'
	},
	output : {
		filename : '[name]/js/index.js',
		path : __dirname + '/app/src'
	},
	module : {
		rules : [{
			test : /\.css$/,
			use : ExtractTextPlugin.extract({
				fallback: 'style-loader',
				use : 'css-loader'
			})
		},{
			test : /\.js$/,
			exclude : /(node_modules|bower_components)/,
			use : [{
				loader : 'babel-loader',
				options : {
					presets : ['env'],
					cacheDirectory : true      //之后的 webpack 构建，将会尝试读取缓存，来避免在每次执行时，可能产生的、高性能消耗的 Babel 重新编译过程(recompilation process)
				}
			}]
		},{
			test : /\.(png|jpg)$/,
			use : [{
				loader : 'url-loader',
				options : {
					limit : 6000,
					name : '../assets/images/[name].[ext]'
				}
			}]
		},{
			test : /\.html$/,
			use : [{
				loader : 'file-loader',
				options : {
					name : '../[path][name].[ext]'
				}
			},{
				loader : 'extract-loader'
			},{
				loader : 'html-loader',
				options : {
					minimize : true
				}
			}]
		}]
	},
	plugins : [
		new ExtractTextPlugin({
			filename : '[name]/css/style.css',
			allChunks : true
		}),
	]
}
