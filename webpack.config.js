var path = require('path');

module.exports = {  
  entry: path.resolve(__dirname, './app/client/entry.js'),
  output: {
    path: path.resolve(__dirname, './app/public'),
    filename: 'bundle.js'
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};