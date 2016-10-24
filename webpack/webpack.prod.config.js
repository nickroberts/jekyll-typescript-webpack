const webpack = require('webpack');
const merge = require('webpack-merge');
const extractTextPlugin = require('extract-text-webpack-plugin');

let common = require('./webpack.common.config.js');

common.module = {
  loaders: [
    {
      test: /\.ts$/,
      loader: 'awesome-typescript-loader'
    },
    {
      test: /\.scss$/,
      loader: extractTextPlugin.extract('css-loader!postcss-loader!sass-loader')
    }
  ]
};

let options = {

  devtool: false,

  plugins: [
    new webpack.optimize.UglifyJsPlugin({ sourceMap: true }),
    new webpack.LoaderOptionsPlugin({
      options: {
        context: __dirname,
        postcss: [
          require('autoprefixer')({ browsers: ['last 2 versions'] }),
          require('cssnano')({
            discardComments: { removeAll: true },
            sourcemap: true
          })
        ]
      }
    })
  ]

};

module.exports = merge(common, options);
