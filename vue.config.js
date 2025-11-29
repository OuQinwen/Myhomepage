module.exports = {
  // 项目部署的基本路径
  publicPath: process.env.NODE_ENV === 'production'
    ? 'Myhomepage' // 替换为你的GitHub仓库名
    : '/Myhomepage',

  // 构建输出目录
  outputDir: 'dist',

  // 静态资源目录
  assetsDir: 'static',

  // 是否在生产环境下生成 source map
  productionSourceMap: false
}