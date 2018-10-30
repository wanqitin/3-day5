const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpack = require('webpack');

module.exports = {

	mode: 'development',

	entry: {
		app: './app/app.js'
	},

	output: {
		path: path.resolve(__dirname, '../public'),

		filename: '[name].js'
	},

	// modules: {
	// 	rules: [
	// 		test: /\.less$/,

	// 		use: [
	// 			{loader: 'style-loader'},
	// 			{loader: 'css-loader'},
	// 			{loader: 'less-loader'}
	// 		]
			
	// 	]
	// }
	module: {
		rules: [
			{
				test: /\.(png|jpg|gif|jpeg)$/,

				use: [
					{
						loader: 'url-loader',
						options: {
							limit: 9000
						}
					}
				]
			},

			{
				test: /\.css$/,
				use: [
					{loader: 'style-loader'},
					{loader: 'css-loader'}
				]
			},

			{
				test: /\.html?$/,
				use: [
					{
						loader: 'html-withimg-loader'
					}
				]
			}

		]
	},

	plugins: [
		new HtmlWebpackPlugin({
			template: './app.html',

			inject: true,

			filename: 'index.html',

			minify: {
				// 移除注释
				removeComments: true,
				// 移除双引号或者单引号
				removeAttributeQuotes: true,
				// 移除空格换行等
				collapseWhitespace: true

			}
		}),

		new webpack.HotModuleReplacementPlugin
	],

	devServer: {
		contentBase: path.resolve(__dirname, '../public/'),

		host: 'localhost',

		port: 8001,

		compress: true,

		hot: true,

		open: true
	}

}