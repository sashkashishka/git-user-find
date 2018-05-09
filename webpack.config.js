const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: "./app",
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: "app.js",
    library: "git"
  },

  watch: NODE_ENV == "development",

  devtool: NODE_ENV == "development" ? "inline-source-map" : false,

  module: {
    rules: [{
      test: /\.js$/,
      loader: "babel-loader",
      exclude: [path.resolve(__dirname, "node-modules")]
    }, {
      test: /\.styl$/,
      use: ExtractTextPlugin.extract({
        fallback: "style-loader",
        use:[
          { 
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              ident: 'postcss',
              plugins: (loader) => [
                require('autoprefixer')({
                  browsers: "last 2 version"
                })
              ]
            }
          },
          {
            loader: "stylus-loader?resolve url"
          }
        ]
          
      })
    }, {
      test: /\.svg$/,
      loader: "file-loader",
      options: {
        name: '[name].[ext]',
        outputPath: 'img/'
      }
    }]
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: __dirname + "/app/index.html"
    }),
    new BrowserSyncPlugin({
      host: 'localhost',
      port: 3000,
      server: {
        baseDir: ['build']
      }
    }), 
    new ExtractTextPlugin('[name].css')
  ]
}