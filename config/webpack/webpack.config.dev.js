const path = require('path');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = require('./webpack.common');

module.exports = {
  devtool: 'inline-source-map',
  target: 'web',
  entry: './example/index.tsx',
  devServer: {
    contentBase: path.join(process.cwd(), './src'),
    port: 3000,
    historyApiFallback: true,
    stats: {
      colors: true,
      chunks: false,
      'errors-only': true
    }
  },
  context: process.cwd(),
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  watchOptions: {
    poll: true
  },
  plugins: [
    ...common.plugins,
    new HtmlWebpackPlugin({
      template: 'example/index.html',
      chunksSortMode: 'dependency',
      baseUrl: '/',
      hash: true
    })
  ],
  module: {
    rules: [
      ...common.rules,
      {
        test: /\.ts(x?)$/,
        use: [
          {
            loader: 'awesome-typescript-loader',
          }
        ],
        exclude: path.join(process.cwd(), './node_modules')
      },
    ]
  }
};


