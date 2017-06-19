# webpack

## 简介

webpack是一个模块打包工具.

web开发中常用到的静态资源，主要是js,css,img, jade,等文件，webpack中，将静态资源文件称为模块。其可以兼容多种js书写规范(cmd,amd等规范)，且可以处理模块间的依赖关系，具有更强大的js模块化的功能。
![webpack](http://webpack.github.io/assets/what-is-webpack.png)

当webpack处理程序时，它会递归的构建一个依赖关系图标，其中包含程序所需的每个模块，然后将所有这些模块打包成少量的bundle，通常只有一个，有浏览器加载。

## 优势

1. webpack 是以commonJS的形式来书写脚本滴，对AMD/CMD的支持也很全面，方便旧项目进行迁移。
2. 能被模块化的不仅仅是js了
3. 开发便捷，能替代部分grunt/gulp的工作，比如打包，压缩混淆，图片装base64等
4. 扩展性强，插件机制完善，特别是支持React热插播(见react-hot-loader)的功能让人眼前一亮。

## 特性

webpack具有requrejs, broserify的功能，但仍有很多自己的特性：

1. 对js，css，img等资源文件都支持打包
2. 对CommonJs, AMD, ES6的语法做了兼容
3. 串联式模块加载器以及插件机制，让其具有更好的灵活性和扩展性，例如提供对CoffeScript, ES6的支持
4. 有独立的配置文件webpack.config.js
5. 可以将代码切割成不同的chunk，实现按需加载，降低了初始化时间
6. 支持SourceUrls 和 SourceMaps，易于调试
7. 具有强大的Plugin接口，大多是内部插件，使用起来比较灵活
8. webpack使用异步IO并具有多级缓存。这使得webpack很快且在增量编译上更加快


## 安装及使用

```js
	npm install -g webpack //全局
	npm install --save-dev webpack //当前目录
```

通常有三种使用方式:

- 命令行使用
	```js
		webpack <entry.js> <result.js>
		//其中entry.js是入口文件，result.js是打包后的输出文件
	```
- 默认使用当前目录的webpack.config.js作为配置文件。如果要制定另外的配置文件，可以执行:
	```js
		webpack --config webpack.custom.config.js
	```

- node.js API使用:
	```js
		var webpack = require('webpack');
		webpack({
			//configuration
		}, function(err, stats){})
	```

### 常用命令

- webpack 最基本的启动webpack命令
- webpack --config XXX.js //使用另一份配置文件(比如webpack.config2.js)来打包
- webpack --env.production  //指定构造环境，传入webpack配置文件中使用的环境变量。
- webpack --colors 输出结果带彩色，比如: 用红色显示耗时较长的步骤
- webpack --profile 输出性能数据，可以看到每一步的耗时
- webpack --display-modules 默认情况下node_modules下的模块会被隐藏，加上这个参数可以显示这些被隐藏的模块
- webpack --output-x //输出配置
- webpack --debug
- webpack --devtool
- webpack --progress
- webpack --module-x //模块配置
- webpack --watch 
- webpack --optimize-x 性能优化配置
- webpack --resolve 
- webpack 统计数据
- 高级配置


### 配置文件

项目中静态资源文件较多，使用配置文件进行打包会方便很多。这个文件告诉webpack它需要做什么。

基本配置
```js
	module.exports = {
		entry: "./app/entry", //string | object | array 应用开始执行，webpack开始打包
		output: {
			path: path.resolve(__dirname, "dist"), //string
			filename: 'bundle.js',
			publickPath: "",
			library: '',
			library: 'umd',
			...
		},
		module: { //模块配置
			rules: [
				//模块规则【配置loader,解析器等选项
			]
		},
		resolve: { //解析模块请求的选项
			modules: [],
			extensions: ['', '.js', '.json', '.scss'],
			alias: {
				AppStore: 'js/stores/AppStores.js',
				...
			}
		},
		devtool: "source-map",
		context: "",
		target: "",
		externals: [],
		devServer: [],
		plugins: [],
		performance: {},
		...
	}
```

- entry 页面入口文件
- output 是对应输出项配置(入口文件最终要生产什么名字的文件，存放在哪里)
- module.loaders 是最关键的一块配置，它告知webpack每一种文件都需要使用什么加载器来处理。
- resolve 解决其他配置方案  

它是高度可以配置的，但是，在开始前，你需要先理解四个核心概念: 入口(entry), 输出(output), loader, 插件(plugins).

### Loaders

webpack 可以使用loader来预处理文件，这允许你打包除JavaScript之外的任何静态资源。

##### 文件

- file-loader 将文件发送到输出文件夹，并返回(相对)URL
- url-loader 同file-loader一样工作， 但如果文件小于限制，可以返回data URL

##### JSON

- json-loader 加载JSON文件

#### Transpiling 转换编译

- babel-loader 加载es6代码，使用babel转义为es5
- coffee-loader 像javascript一样加载CoffeeScript

#### Templating 模板

- html-loader 导出HTML为字符串，需要引用静态资源
- jade-loader 
- markdown-loader 
- react-markdown-loader

#### style 样式

- style-loader
- css-loader
- less-loader
- sass-loader
- postcss-loader
- stylus-loader

#### Linting && Testing (清理和测试)

- eslint-loader 
- jshint-loader
- mocah-loader

#### Frameworks 框架

- vue-loader

### Plugins
webpack 有一个富插件接口，webpack自身的多数功能都是用这个插件接口，这个插件接口使webpack变得极其灵活。

- CommonsChunkPlugin
- ComponentWebpackPlugin
- CompressionWebpackPlugin
- DefinePlugin
- EnvironmentPlugin
- DllPlugin
- ExtractTextWebpackPlugin
- HtmlWebpackPlugin
- IgnorePlugin
- I18nWebpackPlugin
- LimitChunkCountPlugin
- NormalModuleReplacementPlugin

第三方插件

## 应用



