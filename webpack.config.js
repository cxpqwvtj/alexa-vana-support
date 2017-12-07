var webpack = require('webpack')

const DEBUG = true // !(process.env.NODE_ENV === 'production')
const VERBOSE = process.argv.includes('--verbose')
const HOT_DEPLOY = !!process.env.HOT_DEPLOY
let CONTEXT_PATH = `${(process.env.CONTEXT_PATH || '')}`

const hotMiddlewareScript = 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true'

function isExternal(module) {
  var userRequest = module.userRequest

  if (typeof userRequest !== 'string') {
    return false
  }

  return userRequest.indexOf('bower_components') >= 0 ||
         userRequest.indexOf('node_modules') >= 0 ||
         userRequest.indexOf('libraries') >= 0
}

module.exports = {
  context: __dirname,
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
    ]
  }
}
