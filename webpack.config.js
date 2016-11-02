const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [{
  entry: {
    app: './src/react/index.jsx',
  },
  output: {
    path: './dest/js/',
    filename: '[name].js'
  },
  eslint: { // eslint の設定ファイルの読み込み
    configFile: './.eslintrc.json',
  },
  module: {
    loaders: [
      { // babelの対象ファイルの指定
        test: /\.(js|jsx)$/,
        loader: 'babel',
        exclude: /node_modules/, // node_modules配下のファイルは対象外にする
        query: {
          presets: ["es2015", "react"],
        }
      },
      { // esLintの対象ファイルの指定
        test: /\.(js|jsx)$/,
        loader: 'eslint',
        exclude: /node_modules/, // node_modules配下のファイルは対象外にする
      }
    ]
  },
},{
  entry: {
    common: './src/scss/common.scss'
  },
  output: {
    path: './dest/css/',
    filename: '[name].css'
  },
  module: {
    loaders: [
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader?minimize!sass-loader")
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('[name].css')
  ]
}]
