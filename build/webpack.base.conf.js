var path = require('path');

module.exports = {
	entry: {
		app: './docs/index.js'
	},
	output: {
		path: path.resolve(__dirname, '../dist'),
		publicPath: '/',
		filename: '[name].js'
	},
	resolve: {
		extensions: ['', '.js', '.vue']

		// alias: {
		// 	'src': path.resolve(__dirname, '../doc')
		// }
	},
	module: {
		loaders: [
			{
				test: /\.vue$/,
				loader: 'vue'
			},
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/
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