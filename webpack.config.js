var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/dev-server',
    './src/index.js'
  ],
  output: {
    path: './dist/public',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    port: 3000,
    contentBase: './dist/public',
    hot: true
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /(node_modules)/, loader: 'babel-loader', query: { "presets": ["react", "es2015"] } },
      { test: /\.html$/, exclude: /(node_modules)/, loader: 'file?name=[name].[ext]' },
    ]
  }
}
