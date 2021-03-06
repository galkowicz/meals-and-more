const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	devtool: 'inline-source-map',
	devServer: {
		index: 'index2.html',
		contentBase: './dist'
	},
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist')
	},
	module: {
		rules: [{
			test: /\.scss$/,
			use: [
				"style-loader", // creates style nodes from JS strings
				"css-loader", // translates CSS into CommonJS
				"sass-loader" // compiles Sass to CSS, using Node Sass by default
			]
		},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					{
						loader: 'file-loader',
						options: {
							name: '[path][name].[ext]'
						}
					}
				]
			}
		]
	},
	plugins: [
		new HtmlWebPackPlugin({
			template: "./index2.html",
			filename: "./index2.html"
		})
	]
};