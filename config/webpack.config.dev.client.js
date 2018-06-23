/*eslint-disable*/
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const rootPath = process.cwd();

module.exports = {
  target: 'web',
  mode: 'development',
  context: path.resolve(rootPath, 'src'),
  entry: [
    'client/index.js',
    // the entry point of our app
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(rootPath, 'dist'),
    publicPath: '/',
    pathinfo: true,
    // adds information about the contained modules in the bundled file
  },
  resolve: {
    modules: [
      'node_modules',
      'src',
    ],
    extensions: [
      '.js', '.json', '.css',
    ],
  },
  devtool: 'inline-source-map',
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
        use: ['style-loader', 'css-loader', 'resolve-url-loader'],
        include: [
          path.join(__dirname, 'src'),
          /node_modules/
        ],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
        include: [
          path.join(__dirname, 'src'),
          /node_modules/
        ],
      },
      {
        test: /\.(js)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        use: 'json-loader',
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    // Generates an `index.html` file with the <script> injected.
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve(rootPath, './public/index.html'),
    }),
    new webpack.NamedModulesPlugin(),
    new CaseSensitivePathsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.BROWSER': true,
    }),
  ],
  node: {
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
  },
};
