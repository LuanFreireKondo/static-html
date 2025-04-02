const path = require('path')
const htmlPlugin = require('html-webpack-plugin')
const copyPlugin = require('copy-webpack-plugin')
const miniCssExtractPlugin = require('mini-css-extract-plugin')

const HOST = 'static.lkondo.com'
const PORT = 9090

module.exports = {
  mode: 'production',

  entry: {
    home: './src/index.js',
    sw: './src/javascript/sw.js',
  },

  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
  },

  devServer: {
    watchContentBase: true,
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    open: true,
    port: PORT,
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          'style-loader',
          // Translates CSS into CommonJS
          'css-loader',
          // Compiles Sass to CSS
          'sass-loader',
        ],
      },
      {
        test: /\.(css|scss)$/,
        use: [
          miniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader'
        ]
      },
    ]
  },

  plugins: [
    new htmlPlugin({
      title: 'Home',
      url: `https://${HOST}`,
      filename: 'index.html',
      template: './src/index.html',
      chunks: ['home'],
    }),

    new miniCssExtractPlugin({
      filename: 'assets/style.css'
    }),

    new copyPlugin({
      patterns: [
        { 
          from: 'src/assets', 
          to: 'assets',
        },
        { 
          from: 'src/.well-known', 
          to: '.well-known',
        },
        { 
          from: 'src/robots.txt', 
          to: '',
        },
      ],
    }),
  ]
}