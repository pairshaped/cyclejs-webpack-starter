const path = require('path')
const webpack = require('webpack')

const SOURCE_DIR = path.join(__dirname, 'src')
const BUILD_DIR = path.join(__dirname, 'build')

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: [
    path.join(SOURCE_DIR, 'index.js')
  ],

  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },

  stats: {
    colors: true,
    reasons: true,
    chunks: false
  },

  module: {
    preLoaders: [{
      test: /\.jsx?$/,
      include: SOURCE_DIR,
      loader: 'standard'
    }],

    loaders: [
      {
        test: /\.jsx?$/,
        include: SOURCE_DIR,
        loader: 'babel'
      },
      {
        test: /\.styl$/,
        include: SOURCE_DIR,
        loader: 'style-loader!css-loader!stylus-loader'
      }
    ]
  },

  standard: {
    parser: 'babel-eslint'
  },

  resolve: {
    extensions: ['', '.js', '.jsx', '.styl'],
    root: [SOURCE_DIR]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],

  devServer: {
    contentBase: BUILD_DIR,
    hot: true,
    inline: true,
    progress: true,
    publicPath: '/'
  }
};
