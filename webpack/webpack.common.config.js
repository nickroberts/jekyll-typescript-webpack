const webpack = require('webpack');
const extractTextPlugin = require('extract-text-webpack-plugin');

let options = {

  entry: {
    app: './src/index',
    vendor: [
      'foundation-sites'
    ]
  },

  output: {
    path: './_site/app',
    filename: '[name].js'
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.scss$/,
        loader: extractTextPlugin.extract({
          loader: [
            { loader: 'css-loader', query: { sourceMap: true } },
            { loader: 'postcss-loader' },
            { loader: 'sass-loader', query: { sourceMap: true } }
          ]
        })
      }
    ]
  },

  devtool: false,

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({ name: 'vendor', filename: 'vendor.js' }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    }),
    new extractTextPlugin({ filename: '[name].css', allChunks: true }),
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

module.exports = options;
