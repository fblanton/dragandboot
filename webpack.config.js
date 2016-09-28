module.exports = {
  entry: './src/index.js',
  output: {
    path: './dist/public',
    filename: 'bundle.js'
  },
  devServer: {
    port: 3000,
    contentBase: './dist/public',
    inline: true
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.html$|\.css$/,
        exclude: /(node_modules)/,
        loader: 'file?name=[name].[ext]'
      }
    ]
  }
}
