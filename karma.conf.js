module.exports = function(config) {
  var customLaunchers = {
    sl_ios_safari: { // jshint ignore:line
      base: 'SauceLabs',
      browserName: 'iphone',
      platform: 'OS X 10.9',
      version: '7.1'
    },

    sl_chrome: {  // jshint ignore:line
      base: 'SauceLabs',
      browserName: 'chrome'
    },

    sl_firefox: { // jshint ignore:line
      base: 'SauceLabs',
      browserName: 'firefox'
    }
  };

  console.log(process.env.SAUCE_USERNAME);
  console.log(process.env.SAUCE_ACCESS_KEY);

  config.set({
    preprocessors: {
      'spec.bundle.js': ['webpack', 'sourcemap']
    },

    files: [
      {pattern: 'spec.bundle.js', watched: false}
    ],

    junitReporter: {
      outputDir: 'generated'
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
      }
    },

    webpackServer: {
      noInfo: true
    },

    sauceLabs: {
      recordScreenshots: false,
      testName: 'angular reference app unit specs'
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
