module.exports = function(config) {
  config.set({
    autoWatchBatchDelay: 100,
    basePath: '',
    frameworks: ['mocha', 'should'],
    files: [
      {pattern: 'spec.bundle.js', watched: false}
    ],
    exclude: [],

    preprocessors: {
      'spec.bundle.js': ['webpack', 'sourcemap']
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

    reporters: ['mocha', 'growl'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false
  });
};
