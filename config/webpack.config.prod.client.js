/* eslint-disable */
const path = require('path');
const fs = require('fs');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appPath = fs.realpathSync(process.cwd());

module.exports = {
  output: {
    path: path.resolve(appPath, 'dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  devtool: 'none',
  bail: true,
  entry: [path.resolve(appPath, 'src/client/index.js')],
  mode: 'production',
  plugins: [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(appPath, 'public/index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    })
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
        include: [
          path.join(appPath, 'src'),
          /node_modules/
        ],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: [
          path.join(appPath, 'src'),
          /node_modules/
        ],
      },
      {
        test: /\.(js)$/,
        use: ['babel-loader'],
        include: path.join(appPath, 'src'),
        exclude: /node_modules/,
      },
    ],
  },
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
};
