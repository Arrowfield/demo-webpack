module.exports = {
  entry:{
    index:__dirname+"/src/index/index.js"
  },
  output:{
    path:__dirname+"/asset/dev",
    filename:"[name].bundle.js",
    publicPath:'../asset/dev/'
  }
}