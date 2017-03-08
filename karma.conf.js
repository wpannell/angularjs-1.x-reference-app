var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function(config) {
  var customLaunchers = {
    sl_chrome: {  // jshint ignore:line
      base: 'SauceLabs',
      browserName: 'chrome'
    },

    sl_firefox: { // jshint ignore:line
      base: 'SauceLabs',
      browserName: 'firefox'
    }
  };

  process.env.SAUCE_USERNAME = 'wilpannell';
  process.env.SAUCE_ACCESS_KEY = '19730ccc-97be-4d9f-88f8-1754e4425a6f';

  console.log(process.env.SAUCE_USERNAME);
  console.log(process.env.SAUCE_ACCESS_KEY);

  config.set({
    junitReporter: {
      outputDir: 'generated'
    },

    sauceLabs: {
      recordScreenshots: false,
      testName: 'angular reference app unit specs'
    },

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

    autoWatch: false,
    basePath: '',
    browsers: Object.keys(customLaunchers),
    captureTimeout: 2400000,
    colors: true,
    customLaunchers: customLaunchers,
    exclude: [],
    frameworks: ['mocha', 'should'],
    logLevel: config.LOG_DEBUG,
    port: 9876,
    reporters: ['mocha', 'junit', 'saucelabs'],
    singleRun: true
  });
};
