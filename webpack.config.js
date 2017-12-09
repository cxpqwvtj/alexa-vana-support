var webpack = require('webpack')

const DEBUG = true // !(process.env.NODE_ENV === 'production')
// const VERBOSE = process.argv.includes('--verbose')

module.exports = {
  target: 'node',
  context: __dirname + '/src',
  entry: {
    'index': ['./index.js']
  },
  output: {
    libraryTarget: 'commonjs',
    path: __dirname + '/build',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  // devtool: DEBUG ? 'inline-source-map' : false,
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': `"${process.env.NODE_ENV || (DEBUG ? 'development' : 'production')}"` 
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // eslint options (if necessary) 
        }
      },
    ]
  }
}
