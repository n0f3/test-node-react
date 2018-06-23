/* eslint-disable */
const path = require('path');
const nodeExternals = require('webpack-node-externals');
const webpack = require('webpack');
const rootPath = process.cwd();

module.exports = {
  name: 'server',
  target: 'node',
  mode: 'development',
  node: {
    __dirname: false,
  },
  externals: [nodeExternals({
    modulesFromFile: true,
  })],
  devtool: 'inline-source-map',
  context: path.resolve(rootPath, 'src'),
  entry: [
    'babel-polyfill',
    '../server/index.js',
    // the entry point of our app
  ],
  output: {
    path: path.resolve(DeviceRotationRate, 'dist'),
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
          path.join(rootPath, 'src'),
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
  ],
};
