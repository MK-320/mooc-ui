const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

const glob = require("glob");
const list = {};

async function makeList(dirPath, list) {

  const files = glob.sync(`${dirPath}/**/index.js`); //遍历获取文件路径\

  for (let file of files) {
    // const component = file.split(/[/.]/)[2];
    const component = file.split("\\")[2] === 'index.js' ? 'index' : file.split("\\")[2];

    //list[component] = `./${file}`;      TODO://这里我的路径和视频中的路径不一样，所以我这里要替换一下
    list[component] = `./${file.replace(/\\/g, "/")}`;
  }


}

makeList('components/lib', list);
module.exports = {
  entry: list, // list为替换之后的路径值
  mode: 'development',
  output: {
    filename: '[name].umd.js', //最终会拿到   card.umd.js
    path: path.resolve(__dirname, 'dist'),  //使用自带的path获取到路径
    library: 'mui',
    libraryTarget: 'umd',
  },
  plugins: [new VueLoaderPlugin()],
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [{ loader: 'vue-loader' }],
      },
    ],
  },
};
