//webpack.config.js
const path = require('path')
module.exports = {
  //入口
  entry: {
    index:'./src/pages/index/index.js'
  },
  //出口
  output: {
    // 输出到哪个目录
    path: path.resolve(__dirname,'asset/dev/'),
    // 实例最终输出的名字
    filename: '[name].bundle.js'
  },
  //模块
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  }
}