const path = require('path');
const webpack = require('webpack');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const Visualizer = require('webpack-visualizer-plugin');

const common = require('./webpack.common');

module.exports = {
  devtool: 'source-map',
  target: 'web',
  entry: './src/index.tsx',
  output: {
    path: path.join(process.cwd(), './dist'),
    filename: 'bny-shell.js',
    library: 'bny-shell',
    libraryTarget: 'umd',
    umdNamedDefine: true
  },
  externals : {
    react: 'react',
    'react-dom': 'react-dom',
    'react-redux': 'react-redux',
    'redux': 'redux',
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"]
  },
  plugins: [
    ...common.plugins,
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
        drop_console: true,
        drop_debugger: true,
        global_defs: {
          __REACT_HOT_LOADER__: undefined
        }
      },
      minimize: true,
      debug: false,
      sourceMap: true,
      output: {
        comments: false
      },

    }),
    new StyleLintPlugin(),
    new Visualizer({
      filename: './visualizer.html'
    })
  ],
  module: {
    rules: [
      ...common.rules
    ]
  }
};
