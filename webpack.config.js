var webpack = require('webpack');
var UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: __dirname + '/lib/index.ts',
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
    alias: {
      'handlebars' : 'handlebars/dist/handlebars.js'
    }
  },
  output: {
    path: __dirname,
    filename: 'index.js',
    library: 'escpos-xml',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  plugins: [
    new UglifyJsPlugin()
  ],
  node: {
    fs: 'empty',
    readline: 'empty'
  }
};

