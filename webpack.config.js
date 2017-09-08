var webpack = require('webpack');
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
  entry: __dirname + '/lib/index.ts',
  devtool: 'inline-source-map',
  target: 'node',
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"]
  },
  output: {
    path: __dirname + '/dist',
    filename: 'index.js',
    library: 'escpos-xml',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: [
    new UglifyJsPlugin({
      minimize: true
    })
  ]
};

