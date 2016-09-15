const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  output: {
    filename: 'bundle.js'
  },

  devtool: 'sourcemap',

  module: {
    loaders: [
      { test: /\.html$/, loader: 'raw' },
      { test: /\.styl$/, loader: 'style!css!stylus' },
      { test: /\.css/, loader: 'style!css' },
      { test: /\.js$/, loader: 'babel', exclude: [/client\/lib/, /node_modules/, /\.spec\.js/]},
      { test: /\.json$/, loader: 'json-loader' }
    ]
  },

  stylus: {
    use: [require('jeet')(), require('rupture')()]
  },

  plugins: [
    new CopyWebpackPlugin([
      { from: './client/data/products.json' }
    ])
  ]
};
