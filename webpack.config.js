const path = require("path");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: '/',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'), 
      filename: 'index.html',
    }),
    new Dotenv({
      systemvars: true, 
    }),
  ],
  devServer: {
    static: './dist',
    port: 8080, 
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[name][ext][query]", 
        },
      },
    ],
  },
};
