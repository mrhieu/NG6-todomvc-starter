var path    = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'sourcemap',
  entry: {},
  module: {
    loaders: [
       { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: 'ng-annotate!babel' },
       { test: /\.html$/, loader: 'raw' },
       { test: /\.less$/, loader: 'style!css!less' },
       { test: /\.css$/, loader: 'style!css' },
       {
         test: /masonry-layout/,
         // https://github.com/metafizzy/isotope/issues/979
        //  test: /isotope\-|fizzy\-ui\-utils|desandro\-|masonry|masonry\-layout|outlayer|item|get\-size|doc\-ready|eventie|eventemitter|imagesloaded/,
         loader: 'imports?define=>false&this=>window'
       }
    ]
  },
  plugins: [
    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don't have problems
    // with cache purging during deployment.
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: 'body',
      hash: true
    }),

    // Automatically move all modules defined outside of application directory to vendor bundle.
    // If you are using more complicated project structure, consider to specify common chunks manually.
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function (module, count) {
        return module.resource && module.resource.indexOf(path.resolve(__dirname, 'client')) === -1;
      }
    }),

    // new webpack.ProvidePlugin({
    //   item: './item'
    // })
  ],
  resolve: {
    root: [
      path.join(__dirname, "..", "gulp", "node_modules")
    ],
    alias: {
      'masonry-layout': 'masonry-layout/dist/masonry.pkgd.js',
      'item$': 'node_modules/outlayer/item.js',
      // './item': '../node_modules/outlayer/item.js'
      // './': './node_modules'
    },
    extensions: ['', '.js']
  }
};
