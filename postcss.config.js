module.exports = {
  plugins: [
    require('postcss-preset-env')({
      // 可以根据需要配置浏览器支持的版本
      browsers: 'last 2 versions'
    })
  ]
}
