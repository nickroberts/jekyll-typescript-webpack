const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');

module.exports = merge(common, {
  devServer: {
    contentBase: [path.resolve('_site')],
    hot: true,
    open: true,
    watchContentBase: true
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve('assets'),
    publicPath: '/assets/'
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
});
