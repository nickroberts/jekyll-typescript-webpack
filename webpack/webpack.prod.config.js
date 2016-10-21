const webpack = require('webpack');
const merge = require('webpack-merge');

let common = require('./webpack.common.config.js');

let options = {

  devtool: 'source-map',

  plugins: [
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true })
  ]

};

module.exports = merge(common, options);
