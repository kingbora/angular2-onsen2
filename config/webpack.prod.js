/**
 * Created by wenbo.kuang on 2017/10/20.
 */
var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.base.js');
var helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';

module.exports = webpackMerge(commonConfig, {
  devtool: 'source-map',

  output: {
    path: helpers.root('www'),
    // publicPath: '/',
    filename: '[name].[chunkhash].js',
    chunkFilename: '[id].[chunkhash].chunk.js'
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    //简化压缩代码，去除console,warning等语句
    new webpack.optimize.UglifyJsPlugin({ // https://github.com/angular/angular/issues/10618
      sourceMap: true,
      mangle: {
        keep_fnames: true
      }
    }),
    new ExtractTextPlugin('[name].[contentHash].css'),
    // webpack定义的全局常量，编译后会替换成value对应的文本，减少手动一个修改 去除对warning和一些提示信息的代码
    new webpack.DefinePlugin({
      'process.env': {
        'ENV': JSON.stringify(ENV)
      }
    })
  ]
});