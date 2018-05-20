const path = require('path')

module.exports.root = (pathname = '') => path.resolve(__dirname, '../', pathname)
