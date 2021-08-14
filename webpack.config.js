const path = require('path');

module.exports = {
  entry:'./client/index.js',
  output: {
    filename: 'bundle.js',
    publicPath: '/',
    path: path.resolve(__dirname, 'build'),
  },
  mode: 'development', 
  module: {
    rules: [
      { 
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader:'babel-loader',
          options:{
            presets:['@babel/preset-env','@babel/preset-react'],
        }
      }},
      {
        test: /\.s[ac]ss$/i,
        use: [ "style-loader", "css-loader", "sass-loader" ], 
      },
      {
        test: /\.(ttf|eot|svg|gif|woff|woff2|jpeg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [
          {
            loader: 'file-loader',
          },
        ]
      }
    ]
  },//this closes module property
  devServer: {
    publicPath: '/build/',
    hot: true,
  }
};