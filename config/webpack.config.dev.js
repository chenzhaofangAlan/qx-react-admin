const merge = require('webpack-merge')
const common = require('./webpack.config.common')
const webpack = require('webpack');

module.exports = merge(common, {
  mode: 'development',
  /*
  source-map: 在一个单独的文件中产生一个完整且功能完全的文件。这个文件具有最好的source map，但是它会减慢打包速度；
  cheap-module-source-map: 在一个单独的文件中生成一个不带列映射的map，不带列映射提高了打包速度，但是也使得浏览器开发者工具只能对应到具体的行，不能对应到具体的列（符号），会对调试造成不便；
  eval-source-map: 使用eval打包源文件模块，在同一个文件中生成干净的完整的source map。这个选项可以在不影响构建速度的前提下生成完整的sourcemap，但是对打包后输出的JS文件的执行具有性能和安全的隐患。在开发阶段这是一个非常好的选项，在生产阶段则一定不要启用这个选项；
  cheap-module-eval-source-map: 这是在打包文件时最快的生成source map的方法，生成的Source Map 会和打包后的JavaScript文件同行显示，没有列映射，和eval-source-map选项具有相似的缺点；
  */
  devtool: 'cheap-module-eval-source',
  optimization: {
    splitChunks: {
      chunks: 'async',
    }
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
})
