const path = require('path')
const webpack = require('webpack')

function resolve(relatedPath) {
  return path.join(__dirname, relatedPath)
}
module.exports = {
  entry: {
    index: resolve('./src/index.js')
  },
  output: {
    path: resolve('./dist'),
    filename: '[name].[hash:4].js',
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015', 'stage-0']
        }
      },
      {
        test: /\.css/,
        loader: 'css'
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
        options: {
          limit: 8192,
          name: 'img/[name].[hash:4].[ext]'
        }
      },
      {
        test: /\.html$/,  //静态资源
        loader: 'html',
      }
    ],
  }

}