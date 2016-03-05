var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: "./src/app.js",
    output: {
        path: __dirname + '/dist',
        filename: "bundle.js"
    },
    plugins: [new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    })],
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
        ]
    }
};
