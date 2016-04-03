var path = require('path');

module.exports = {
	entry: {
		app: './src/zeus.js'
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/',
		filename: '[name].js'
	},
	resolve: {
		extensions: ['', '.js', '.vue'],
		alias: {
			'src': path.resolve(__dirname, '../src')
		}
	},
	resolveLoader: {
		root: path.join(__dirname, 'node_modules')
	},
	module: {
		preLoders: [
			{
				test: '/.js$/',
				loader: 'eslint',
				exclude: /node_modules/
			}
		],
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue'
			},
			{
				test: /\.js/,
				loader: 'babel'
			},
			{
        test: /\.json$/,
        loader: 'json'
      },
			{
				test: /\.css$/,
				loader: 'style!css'
			},
			{
				test: /\.less/,
				loader: 'style!css!less'
			},
			{
				test: /\.(png|jpg|svg|gif)(\?embed)?$/,
				loader: 'url'
			}
		]
	},
	vue: {
    loaders: {
      js: 'babel'
    }
  },
	eslint: {
		formatter: require('eslint-friendly-formatter')
	}
}