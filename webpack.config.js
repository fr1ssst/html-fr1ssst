const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: {
    main: ['@babel/polyfill', path.resolve(__dirname, 'src', 'index.js')],
    logIn: ['@babel/polyfill', path.resolve(__dirname, 'src', 'formLogIn.js')]
  },
  output:{
    path: path.resolve(__dirname, 'build'),
    filename: 'js/[contenthash:8].js',//Downloading js files to the js folder when building the project
    clean: true
  },
  devtool: 'inline-source-map',
  devServer: {
    static: {directory: path.join(__dirname, 'public'),},
    compress: true,
    port: 9000
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './public/index.html',
      chunks: ['main']
    }),
    new HtmlWebpackPlugin({
      filename: 'logIn.html',
      template: './public/logIn.html',
      chunks: ['logIn']
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[contenthash:8].css',//Downloading css files to the css folder when building the project
      chunkFilename: 'css/[contenthash:8].css',//Downloading css chunkFile to the css folder when building the project
    }),

  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.json5$/i,
        loader: 'json5-loader',
        type: 'javascript/auto',
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { targets: "defaults" }]
            ]
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};