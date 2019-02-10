const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/ts/app.ts'
  },
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        exclude: /node_modules/,
        test: /\.tsx?$/,
        use: 'ts-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template/default.html',
      filename: '../_layouts/default.html'
    }),
    new HtmlWebpackPlugin({
      template: './src/template/blank.html',
      filename: '../_layouts/blank.html'
    })
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  }
};
