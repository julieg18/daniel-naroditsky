const path = require('path');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
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
        options: {
          name: '[path][name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new Dotenv({ systemvars: true }),
    new WebpackPwaManifest({
      name: 'Daniel Naroditsky',
      short_name: 'GmNaroditsky',
      description: '',
      background_color: '#ffffff',
      theme_color: '#ffffff',
      display: 'standalone',
      icons: [
        {
          src: path.resolve(
            'src/images/favicon_package_v0.16/android-chrome-192x192.png',
          ),
          sizes: '192x192',
        },
        {
          src: path.resolve(
            'src/images/favicon_package_v0.16/android-chrome-384x384.png',
          ),
          size: '384x384',
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      chunks: ['index'],
      favicon: './src/images/favicon_package_v0.16/favicon.ico',
    }),
    new HtmlWebpackPlugin({
      filename: 'merch.html',
      template: './src/merch.html',
      chunks: ['merch'],
      favicon: './src/images/favicon_package_v0.16/favicon.ico',
    }),
    new HtmlWebpackPlugin({
      filename: '404.html',
      template: './src/404.html',
      chunks: ['404'],
      favicon: './src/images/favicon_package_v0.16/favicon.ico',
    }),
    new MiniCssExtractPlugin(),
  ],
};
