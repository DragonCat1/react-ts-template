const baseConf = require('./webpack')
const webpackMerge = require('webpack-merge')

module.exports = webpackMerge(baseConf, {
  mode: 'development'
})
