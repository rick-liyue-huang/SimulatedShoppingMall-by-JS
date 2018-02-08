/*
* @Author: rick-liyue-huang
* @Date:   2018-02-07 17:15:47
* @Last Modified by:   rick-liyue-huang
* @Last Modified time: 2018-02-08 11:33:43
*/

var webpack = require('webpack');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = {
	entry: {
		'common': ['./src/page/common/index.js'],
		'index': ['./src/page/index/index.js'],
		'login': ['./src/page/login/index.js']
	},
	output: {
		path: './dist',
		filename: 'js/[name].js'
	},
	externals: {
		'jquery': 'window.jQuery'
	},
	module: {
		loaders: [
			{
				test: /\.css$/, 
				loader: ExtractTextPlugin.extract("style-loader","css-loader")}
		]
	},
	plugins: [

	// this plugin will get the common module, and put it in the base.js
		new webpack.optimize.CommonsChunkPlugin({
			name: 'common',
			filename: 'js/base.js'
		}),
		new ExtractTextPlugin("css/[name].css")
	] 
}

module.exports = config;















