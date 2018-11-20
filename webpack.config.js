const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin') // 分离js和css

console.log(__dirname)
module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack-test', // 生成html的文件标题
      filename: path.join(__dirname, 'build/index.html'), //// 配置输出文件名和路径
      template: 'asset/index.html'
    }),
    new ExtractTextPlugin('[name].css')
  ],
  module: {
    rules: [
      // svg
      {
        test: /\.svg$/,
        use: ['file-loader']
      },
      //less
      {
        test: /\.less$/,

        include: [
          path.join(__dirname, 'src')
        ],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',// 用什么loader提取css文件
          use: [ // 指定什么样的loader去编译文件
            'css-loader',
            'postcss-loader',
            'less-loader',
          ]
        }),
      },
      {
        test: /\.(js|jsx)$/,
        use: [{
          loader: "babel-loader",
        }], // es6转译
        // include: [srcPath],
        exclude: /(node_modules|bower_components)/
      },
    ]
  }
}