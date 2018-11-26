const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin') // 分离js和css
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const webpack = require('webpack')
console.log(__dirname)
module.exports = (env, args) => ({
  devtool: 'source-maps',
  entry: {
    index: './src/index.js',
    vendor: [
      'react',
      'react-dom',
    ]
  },
  resolve: {
    alias: {
      '@src': path.join(__dirname, 'src'),
      '@components':path.join(__dirname, 'src/components')
    },
    extensions:['.jsx','.js'] // 配置这项之后，会覆盖默认的数组
  },
  devServer: {
    hot: true // dev server 的配置要启动 hot，或者在命令行中带参数开启
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
        parallel: true,
        cache: true,
        uglifyOptions: {
          compress: true,
        },
        sourceMap: true,
      }),
      // 仅在我们要自定义压缩配置时才需要这么做
      // mode 为 production 时 webpack 会默认使用压缩 JS 的 plugin
    ] : [],
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "initial",
          test: "vendor",
          name: "vendor", // 使用 vendor 入口作为公共部分
          enforce: true,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack-test', // 生成html的文件标题
      filename: path.join(__dirname, 'build/index.html'), //// 配置输出文件名和路径
      template: 'asset/index.html'
    }),
    new ExtractTextPlugin('[name].css'),
    new webpack.NamedModulesPlugin(), // 用于启动 HMR 时可以显示模块的相对路径
    new webpack.HotModuleReplacementPlugin(), // Hot Module Replacement 的插件...
  ],
  module: {
    rules: [
      // svg
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: [
          /* {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      outputPath: 'images/'
                    }
                  } */
          {
            loader: 'url-loader',
            options: {
              limit: 8192, // 单位是 Byte，当文件小于 8KB 时作为 DataURL 处理
              outputPath: 'images/'
            },
          }
        ]
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
            {
              loader:'css-loader',
              options:{
                importLoaders:1,
                modules: false //是否开启模块化
              }
            },
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