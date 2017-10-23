/**
 * Created by wenbo.kuang on 2017/10/20.
 */
module.exports = {
  plugins: [
    require('autoprefixer')({
      browsers: ['> 1%']
    }),
    require('postcss-flexbugs-fixes')
  ]
};