const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');

let common = require('./webpack.common.config.js');

let options = {

  output: {
    path: path.resolve(__dirname, '_site/app'),
    publicPath: '/app'
  },

  devServer: {
    contentBase: '_site/',
    hot: true,
    inline: true,
    open: true,
    compress: true,
    watchContentBase: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]

};

module.exports = merge(common, options);
