var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:3000',
    'webpack/hot/only-dev-server',
    'react-hot-loader/patch',
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
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader?presets[]=react,presets[]=es2015,presets[]=stage-2',
        plugins: ['react-hot-loader/babel']
       },
      { test: /\.html$/, exclude: /(node_modules)/, loader: 'file?name=[name].[ext]' },
    ]
  }
}
