const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [{
      test: /\.html$/,
      use: [
        {
          loader: 'html-loader',
          options: { minimize: false }
        }
      ]
    }]
  }
});
