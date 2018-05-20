const baseConf = require('./webpack')
const webpackMerge = require('webpack-merge')
const CleanPlugin = require('clean-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const { root } = require('./config')


module.exports = webpackMerge(baseConf, {
  mode: 'production',
  output: {
    filename: '[name].[chunkhash].js'
  },
  plugins: [
    new CleanPlugin(['dist'], { root: root(), verbose: true }),
    new BundleAnalyzerPlugin({ analyzerPort: 3011 })
  ]
})
