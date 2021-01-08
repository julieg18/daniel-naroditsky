const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'production',
  entry: {
    index: './src/scripts/index.js',
    merch: './src/scripts/merch.js',
    404: './src/scripts/404.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/daniel-naroditsky/',
  },
  devServer: {
    contentBase: './dist',
    publicPath: '/daniel-naroditsky/',
    openPage: 'daniel-naroditsky/',
    open: true,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: '/node_modules/',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.(png|svg|jpg|gif|woff2)$/,
        loader: 'file-loader',
      },
    ],
  },
  plugins: [
    new Dotenv({ systemvars: true }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      filename: 'merch.html',
      template: './src/merch.html',
      chunks: ['merch'],
    }),
    new HtmlWebpackPlugin({
      filename: '404.html',
      template: './src/404.html',
      chunks: ['404'],
    }),
    new FaviconsWebpackPlugin({
      logo: './src/images/logo.png',
      favicons: {
        icons: {
          appleIcon: [
            'apple-touch-icon-114x114.png',
            'apple-touch-icon-120x120.png',
            'apple-touch-icon-144x144.png',
            'apple-touch-icon-152x152.png',
            'apple-touch-icon-167x167.png',
            'apple-touch-icon-180x180.png',
            'apple-touch-icon-57x57.png',
            'apple-touch-icon-60x60.png',
            'apple-touch-icon-72x72.png',
            'apple-touch-icon-76x76.png',
            'apple-touch-icon-precomposed.png',
            'apple-touch-icon.png',
          ],
          appleStartup: false,
          firefox: ['firefox_app_128x128.png', 'firefox_app_60x60.png'],
        },
      },
    }),
    new MiniCssExtractPlugin(),
  ],
};
