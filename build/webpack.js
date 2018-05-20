const path = require('path')
module.exports = {
  content:path.resolve(__dirname,'../'),
  entry: 'src/index.tsx',
  Output:{
    path:'dist'
  },
  module: {
    rules: [
      { test: /\.ts[x]$/, use: 'ts-loader' }
    ]
  }
}