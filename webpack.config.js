const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')

module.exports = (env, arg) => {
  return {
    mode: 'development',
    devtool: "source-map",
    entry: {
      main: path.resolve(__dirname, './src/app.js'),
    },
    output: {
      filename: '[name]_[contenthash].bundle.js',
      path: path.resolve(__dirname, './dist')
    },
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        'vue': 'vue/dist/vue.runtime.common.js',
        '@': path.resolve('src')
      }
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /[\\/]node_modules[\\/]/,
          use: {
            loader: 'babel-loader',
          },
        },
        {
          test: /\.vue$/i,
          loader: 'vue-loader',
        },
        {
          test: /\.(sc|c)ss$/i,
          use: [
            arg.mode === 'production' ? MiniCssExtractPlugin.loader : 'vue-style-loader',
            'css-loader',
            {
              loader: "sass-loader",
              options: {
                sourceMap: true
              },
            }
          ],
        }
      ],
    },
    devServer: {
      historyApiFallback: true,
      static: path.resolve(__dirname, './src'),
      compress: true,
      hot: true,
      port: 8080,
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        inject: true, 
        chunks: ['main'],
        template: path.resolve(__dirname, './src/index.tpl'),
        filename: 'index.html',
        inject: false
      }),
      new MiniCssExtractPlugin({
        filename: "[name]_[contenthash].css",
        chunkFilename: "[id]_[contenthash].css",
      }),
      new VueLoaderPlugin(),
      new webpack.HotModuleReplacementPlugin()
    ]
  };
};