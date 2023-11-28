// 构造绝对路径
const path = require('path') //node自带的库
// webpack只能识别js/json形式的文件，并不能处理.vue结尾的文件，所以需要安装vue-loader来处理vue组件
const { VueLoaderPlugin } = require('vue-loader')
// 动态引入入口文件的位置
const glob = require('glob') //node自带的库
// list：存放多个组件的入口地址
const list = {}
// 假如封装了多个组件，如下注释的对象，为了避免每次都手动写入入口地址，用node自带的glob动态引入入口文件的地址
// {
//     crmDetail: './components/lib/crm/index.js',
//     crmCard: './components/lib/card/index.js',
// }
// 配置组件文件夹的目录+配置glob文件的配置对象
// dirPath：组件文件夹的路径
// 为了同步地读文件，用async关键字
async function makeList(dirPath, list) {
  // files接收遍历到的所有文件
  // 拿到dirPath文件夹下的所有index.js文件的文件路径
  const files = glob.sync(`${dirPath}/**/index.js`)
  //   console.log("files", files); //files [ 'components/lib/crm/index.js' ]
  for (let file of files) {
    // 对每个组件的文件路径进行切分，提取出文件名
    const component = file.split(/[/.]/)[2]
    console.log('component', component) //crm
    //   配置list对象
    list[component] = `./${file}`
  }
  console.log('list', list) //list { crm: './components/lib/crm/index.js' }
}
makeList('components/lib', list)
module.exports = {
  // 告诉webpack的入口文件地址
  entry: list,
  mode: 'development',
  output: {
    // 输出文件名
    filename: '[name].umd.js', //crm.umd.js
    // 输出bundle的目录
    path: path.resolve(__dirname, 'dist'),
    library: 'mui', //把所有打包文件的输出配置到此字段下
    // 将js打包成umd形式的模块
    libraryTarget: 'umd',
  },
  plugins: [new VueLoaderPlugin()],
  module: {
    // 告诉webpack对于什么样的文件使用什么样的loader
    rules: [
      {
        test: /\.vue$/, //对于.vue结尾的文件
        use: [
          {
            loader: 'vue-loader',
          },
        ],
      },
    ],
  },
}
