const webpack = require('webpack');
const path = require('path');

// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  devtool: 'source-map',
  entry: {
    index: './src/index.ts',
    homework: './src/Homework.ts',
    user: './src/User.ts'
  },

  // ---Output section---
  output: {
    path: path.resolve(__dirname, 'dist'),
    // filename: 'bundle.js',
    filename: '[name].js'
  },

  // ---Loaders---
  module: {
    rules: [
      // { test: /\.css$/, use: ['css-loader'] }
      // { test: /\.css$/, use: ['style-loader','css-loader'] },
      // {
      //   test: /\.css$/,
      //   use: [
      //     {
      //       loader: MiniCssExtractPlugin.loader,
      //     },
      //     'css-loader'
      //   ]
      // },
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },

  resolve: {
      extensions: ['*', '.ts', '.js'],
  },

  // ---Plugins---
  plugins: [
    // new MiniCssExtractPlugin({
    //   filename: '[name].css',
    //   chunkFilename: '[id].css',
    // }),
    // new webpack.DefinePlugin({
    //   SOME_VALUE: JSON.stringify("some value from plugin"),
    //   BOOL_VALUE: true,
    // }),
    new HtmlWebpackPlugin(),
  ],

  // ---Dev Server---
  devServer: {
    hot: true
  }
}
