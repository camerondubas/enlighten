var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    entry: "./src/app.js",
    output: {
        path: __dirname + '/dist',
        filename: "[hash].bundle.js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader") },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        template: 'src/index.html'
      }),
      new ExtractTextPlugin("[hash].css")
    ],
    devServer: {
        contentBase: './dist',
        stats: {
          modules: false,
          cached: false,
          colors: true,
          chunk: false
        },
        proxy: {
          '/api/*': {
            target: 'http://localhost:5000/',
            secure: false
          }
        }
      }

};
