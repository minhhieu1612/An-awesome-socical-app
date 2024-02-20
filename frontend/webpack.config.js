const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const envPath = '.env.' + process.env.NODE_ENV;
require('dotenv').config({path: envPath});

module.exports = {
	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'app.[hash:5].js'
	},
	mode: 'development',
	devServer: {
		compress: true,
		port: process.env.PORT,
		hot: true
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx|ts|tsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
					}
				}
			},
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
		]
	},
	resolve: {
		alias: {
			$: __dirname
		}
	},
	plugins: [
		new HtmlWebpackPlugin({template: './public/index.html'})
	]
}
