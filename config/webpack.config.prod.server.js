/* eslint-disable */
const path = require('path');
const fs = require('fs');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const appPath = fs.realpathSync(process.cwd());


module.exports = {
  name: 'server',
  target: 'node',
  mode: 'production',
  node: {
    __dirname: false,
  },
  externals: [nodeExternals({
    modulesFromFile: true,
  })],
  devtool: 'none',
  entry: [
    'babel-polyfill',
    path.resolve(appPath, 'src/server/index.js'),
  ],
  output: {
    path: path.resolve(appPath, 'dist'),
    filename: 'bundle.node.js',
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
				use: ['babel-loader'],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'resolve-url-loader'],
        include: [
          path.join(appPath, 'src'),
          /node_modules/
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.BROWSER': false,
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
    }),
  ],
};
