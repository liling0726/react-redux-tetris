const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin') // 分离js和css
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
console.log(__dirname)
module.exports = (env, args) => ({
  devtool: args.mode === 'development' ? 'source-maps' : 'eval',
  entry: {
    index: './src/index.js'
  },
  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js'
  },
  optimization: {
    minimize: false,
    // 使用 args 来获取 mode 参数的值
    minimizer: args.mode === 'production' ? [
      new UglifyJsPlugin({ 
        parallel:true,
        cache:true,
        uglifyOptions:{
          compress: true,
        }, 
        sourceMap: true,
       }), 
      // 仅在我们要自定义压缩配置时才需要这么做
      // mode 为 production 时 webpack 会默认使用压缩 JS 的 plugin
    ] : [],
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
        test: /\.(svg|png|jpg|gif)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'images/'
          }
        }]
      },
      //less
      {
        test: /\.less$/,

        include: [
          path.join(__dirname, 'src')
        ],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader', // 用什么loader提取css文件
          use: [ // 指定什么样的loader去编译文件
            'css-loader',
            'postcss-loader',
            'less-loader',
          ],
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
})