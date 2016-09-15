var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function(config) {
  config.set({
    webpack: {
      devtool: 'inline-source-map',

      module: {
        loaders: [
          {test: /\.html$/, loader: 'raw'},
          {test: /\.styl$/, loader: 'style!css!stylus'},
          {test: /\.css/, loader: 'style!css'},
          {
            test: /\.js$/,
            loader: 'babel',
            exclude: [/client\/lib/, /node_modules/]
          },
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
    },

    files: [
      {pattern: 'spec.bundle.js', watched: false},
      {pattern: 'client/data/*.json', watched: false, included: false, served: true, nocache: false}
    ],

    proxies: {
      '/': '/base/client/data/'
    },


    preprocessors: {
      'spec.bundle.js': ['webpack', 'sourcemap']
    },

    webpackServer: {
      noInfo: true
    },

    autoWatch: true,
    autoWatchBatchDelay: 100,
    basePath: '',
    browsers: ['Chrome'],
    colors: true,
    exclude: [],
    frameworks: ['mocha', 'should'],
    logLevel: config.LOG_INFO,
    port: 9876,
    reporters: ['mocha', 'growl'],
    singleRun: false
  });
};
