var webpack = require('webpack');

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
  }
};
