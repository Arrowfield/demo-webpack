// webpack.config.js
const path = require('path')
//console.log(path)
module.exports = {
  // 入口：要进行处理的实例（js）
  entry: './src/pages/index/index.js',
  // 出口：输出配置
  output: {
      // 输出到哪个目录
      path: path.resolve(__dirname,'asset/dev/'),
      // 静态资源的引用路径
      publicPath: '/asset/dev/',
      // 实例最终输出的名字
      filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }
    ]
  }
}