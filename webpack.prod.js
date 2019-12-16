const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const TerserPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const Critters = require('critters-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        sourceMap: true
      }),
      new OptimizeCSSAssetsPlugin({
        cssProcessor: require('cssnano'),
        cssProcessorOptions: {
          map: { inline: false }
        }
      })
    ]
  },
  module: {
    rules: [{
      test: /\.html$/,
      use: [
        {
          loader: 'html-loader',
          options: { minimize: true }
        }
      ]
    }]
  },
  plugins: [
    new Critters({
      inlineThreshold: 10
    })
  ]
});