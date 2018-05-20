const Path = require('path')

exports.path = (path)=>{
  return Path.resolve(__dirname,'../',path)
}