const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const NODE_MODULES = path.join(__dirname, './node_modules');
const jsonImporter = require('node-sass-json-importer');

module.exports = {
  entry: './src/index.js',
  // Where files should be sent once they are bundled
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'index.bundle.js',
    publicPath: '/',
    assetModuleFilename: 'assets/img/[hash][ext][query]',
    clean: true,
  },
  // Optional and for development only. This provides the ability to
  // map the built code back to the original source format when debugging.
  devtool: 'eval-source-map',
  // webpack 5 comes with devServer which loads in development mode
  devServer: {
    port: 3000,
    historyApiFallback: true,
  },
  // Rules of how webpack will take our files, complie & bundle them for the browser 
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /nodeModules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/i,
        exclude: /nodeModules/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(sc|c)ss$/,
        exclude: /nodeModules/,
        enforce: 'pre',
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
          }
        ]
      },
      {
        test: /\.(png|jpg|gif|jpeg|webp|svg)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(png|jpg|gif|jpeg|webp|svg)$/i,
        type: 'asset/inline'
      },
      {
        test: /\.(ttf)$/i,
        type: 'asset/resource'
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: false
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
}