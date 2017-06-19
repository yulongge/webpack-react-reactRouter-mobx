var path = require("path");
var webpack = require("webpack");
var OpenBrowserPlugin = require('open-browser-webpack-plugin'); 

var ROOT_PATH = path.resolve(__dirname);
var WEB_PATH = path.resolve(ROOT_PATH, 'src');
var BUILD_PATH = path.resolve(ROOT_PATH, 'public');

module.exports = {
	devtool: "cheap-module-eval-source-map",
	entry: [
		//'webpack-hot-middleware/client?reload=true',
		WEB_PATH
	],
	output: {
		path: BUILD_PATH,
		filename: 'bundle.js'
	},
	plugins: [
		//new OpenBrowserPlugin({ url: 'http://localhost:3000', browser: 'Google Chrome'})
		new webpack.HotModuleReplacementPlugin(),
		new OpenBrowserPlugin({ url: 'http://localhost:8080' })
	],
	resolve: {
		extensions: ['.js', '.jsx', '.less', '.css', '.png', '.jpg', 'jpeg'],
		alias: {
			'components': path.join(WEB_PATH, '/components/index.js'),
			'assets': path.join(WEB_PATH, '/assets')
		}
	},
	module: {
		loaders: [
			{
				test: /\.jsx?$/,
				loader: 'babel-loader',
				include: ROOT_PATH,
				query: {
					plugins: ['transform-object-assign'],
					presets: ['react', 'stage-0', 'es2015'] 
				}
			},
			{
				test: /\.css$/,
				loader: ['style-loader', 'css-loader']
			},
			{
				test: /\.less$/,
				loader: ['style-loader', 'css-loader', 'less-loader'],
				include: ROOT_PATH
			},
			{
				test: /\.(png|jpg|gif|jpeg|svg|eot|woff|ttf|worff2)$/,
				loader: 'file-loader'
			}
		]
	}
}
