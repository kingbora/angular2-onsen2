/**
 * Created by wenbo.kuang on 2017/10/20.
 */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const helpers = require('./helpers');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    'app': './src/main.ts',
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'styles': [
      './src/styles.scss'
    ]
  },
  module: {
    rules: [{
      test: /\.ts$/,
      loaders: [{
        loader: 'awesome-typescript-loader',
        options: {
          configFileName: helpers.root('src', 'tsconfig.json')
        }
      },
        'angular2-template-loader'
      ]
    }, {
      test: /\.html$/,
      loader: 'html-loader',
      query: {
        ignoreCustomFragments: [/\{\{.*?}}/],
        root: helpers.root('src'),
        attrs: ['img:src', 'img:ng-src']
      }
    }, {
      test: /\.(png|jpe?g|gif|svg)$/i,
      loaders: [
        'file-loader?hash=sha512&digest=hex&name=images/[name].[hash].[ext]',
        'image-webpack-loader'
      ]
    }, {
      test: /\.(eot|otf|ttf|woff|woff2)$/i,
      loader: 'file-loader?hash=sha512&digest=hex&name=fonts/[name].[hash].[ext]'
    }, {
      test: /\.scss$/,
      exclude: [helpers.root('src', 'app')],
      loader: ['to-string-loader'].concat(
        ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
                importLoaders: true
              }
            }, {
              loader: 'postcss-loader',
              options: {
                sourceMap: true
              }
            }, {
              loader: 'sass-loader',
              options: {
                sourceMap: true
              }
            }
          ]
        })
      )
    }, {
        test: /\.scss$/,
        include: [helpers.root('src', 'app')],
        loaders: ['to-string-loader'].concat(
          ExtractTextPlugin.extract({
            fallback: 'style-loader',
            use: [
              {
                loader: 'raw-loader'
              }, {
                loader: 'postcss-loader',
                options: {
                  sourceMap: true
                }
              }, {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          })
        )
      }
    ]
  },

  plugins: [
    // Workaround for angular/angular#11580
    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)@angular/, // The (\\|\/) piece accounts for path separators in *nix and Windows
      helpers.root('./src'), // location of your src
      {} // your Angular Async Route paths relative to this root directory
    ),
    //把所有入口节点的公共代码提取出来,生成一个chunk（name为common.js）进行复用
    new webpack.optimize.CommonsChunkPlugin({
      name: ['common', 'vendor', 'polyfills'],
      minChunks: Infinity
    }),
    new webpack.optimize.ModuleConcatenationPlugin(),
    new webpack.HashedModuleIdsPlugin(),
    new HtmlWebpackPlugin({
      template: helpers.root('src', 'index.html'),
      filename: helpers.root('www', 'index.html'),
      minify: {
        removeComments: true
      }
    }),
    // new CopyWebpackPlugin([
    //   {
    //     from: 'favicon.ico',
    //     to: 'favicon.ico'
    //   }
    // ]),
    new ScriptExtHtmlWebpackPlugin({
      defer: [/app/, /vendor/, /polyfills/, /styles/],
      defaultAttribute: 'async'
    }),
    new ExtractTextPlugin({
      filename: '[name].[contentHash].css',
      allChunks: true
    })
  ],
  devServer:{
    contentBase: helpers.root('www'), //本地服务器所加载的页面所在的目录
    port: 9000,
    inline: false, //源文件改变不自动刷新页面，需手动刷新
    historyApiFallback: true, //在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    hot: true,
    stats: 'minimal'
  },
  resolve: {
    extensions: ['.ts', '.js', '.scss'],
    modules: [
      'node_modules'
    ]
  }
};
