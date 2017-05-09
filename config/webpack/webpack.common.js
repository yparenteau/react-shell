const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  rules: [
    {
      enforce: 'pre',
      test: /\.ts(x?)$/,
      use: "source-map-loader",
      exclude: [/node_modules/]
    },
    {
      enforce: 'pre',
      test: /\.ts(x?)$/,
      loader: 'tslint-loader',
      exclude: [/node_modules/]
    },
    {
      test: /\.scss/,
      exclude: [/node_modules/],
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            query: {
              modules: true,
              camelCase: 'dashes',
              localIdentName: '[local]_[hash:base64:5]'
            }
          },
          {
            loader: 'sass-loader',
            query: {
              sourceMap: true
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: () => [autoprefixer('last 2 versions', 'ie 11')]
            }
          }
        ]
      })
    },
    {
      test: /\.(png|jpg)$/,
      use: 'url-loader?limit=15000',
      exclude: [/node_modules/]
    }
  ],
  plugins: [
    new ExtractTextPlugin({ filename: 'bny-shell.css', disable: process.env.NODE_ENV !== 'production', allChunks: true }),
    new StyleLintPlugin()
  ]
};

