var webpack = require('webpack')
const nodeExternals = require('webpack-node-externals')

const DEBUG = true // !(process.env.NODE_ENV === 'production')
const VERBOSE = process.argv.includes('--verbose')

module.exports = {
  name: 'server',
  target: 'node',
  // externals: [nodeExternals()],
  context: __dirname + '/src',
  entry: {
    'index': ['./index.js']
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: DEBUG ? 'inline-source-map' : false,
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
