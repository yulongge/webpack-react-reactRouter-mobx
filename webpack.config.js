var path = require('path');
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var OpenBrowserPlugin = require('open-browser-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname);
var WEB_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'dist');

module.exports = {
	entry: [
		"babel-polyfill",
		"whatwg-fetch",
		WEB_PATH			
	],
	devServer: {
		hot: true,
		inline: true,
		contentBase: BUILD_PATH,
		port: 3000,
		host: "0.0.0.0",
		publicPath: "/",
		historyApiFallback: true,
		disableHostCheck: true,
		proxy: {
			'/api/*': {
				target: 'http://localhost:9090',
				pathRewrite: { "^/api": ""},
				secure: false
			}
		}
	},
	output: {
		path: BUILD_PATH,
		publicPath: "/",
		filename: "app.[hash].js"
	},
	devtool: "eval",
	resolve: {
		extensions: ['.js', '.jsx', '.less', '.css', '.png', '.jpg', '.jpeg'],
		alias: {
			"components": path.join(WEB_PATH, '/components/index.js'),
			"assets": path.join(WEB_PATH, '/assets'),
			"utils": path.join(WEB_PATH, '/utils')
		}
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options: {
					presets: [
						["es2015", {"modules": false}],
						"stage-0",
						"react"
					],
					plugins: [
						"transform-async-to-generator",
						"transform-decorators-legacy"
					]
				}
			},
			{
				test: /\.less|css$/,
				use: [
					"style-loader",
					"css-loader",
					"less-loader"
				]
			},
			{
				test: /\.(png|jpg|gif|jpeg|svg|eot|woff|ttf|worff2)$/,
				loader: 'file-loader'
			}
		]
	},
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new HtmlWebpackPlugin({ hash: false, template: "./index.html"}),		
		new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /nb/),
		new OpenBrowserPlugin({url: 'http://localhost:3000', browser: "Google Chrome"}),

		new webpack.optimize.CommonsChunkPlugin({name: "common", filename: "common.js"}),
		
	]
}
