module.exports = {
  devtool:"eval-source-map",
  entry:{
    index:__dirname+"/src/index/index.js"
  },
  output:{
    path:__dirname+"/asset/dev",
    filename:"[name].bundle.js",
    publicPath:'../asset/dev/'
  },
  devServer:{
    contentBase:"./",
    historyApiFallback:false,
    inline:true,
    port:8090
  }
}