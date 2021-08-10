const path = require('path');

module.exports = {
  entry:'./client/index.js',
  output: {
    filename: 'bundle.js',
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
      }
    ]
  },//this closes module property
  devServer: {
    publicPath: '/build/',
    hot: true,
  }
};