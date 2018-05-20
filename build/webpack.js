const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { root } = require('./config')

const isDev = process.env.NODE_ENV === 'development'

const styleLoaders = [
  { loader: MiniCssExtractPlugin.loader },
  { loader: 'css', options: { sourceMap: isDev } },
  { loader: 'postcss', options: { sourceMap: isDev } }
]

module.exports = {
  entry: { app: root('src/index.tsx') },
  output: {
    path: root('dist')
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@': root('src'),
      '@views': root('src/views'),
      '@comps': root('src/components'),
      '@utils': root('src/utils'),
      '@static': root('src/static'),
      '@img': root('src/static/img'),
      '@styles': root('src/styles')
    }
  },
  resolveLoader: {
    moduleExtensions: ['-loader']
  },
  module: {
    rules: [
      { test: /\.tsx?$/i, use: 'ts' },
      { test: /\.jsx?$/i, use: 'babel' },
      { test: /\.css$/i, use: [...styleLoaders] },
      { test: /\.s[ac]ss$/i, use: [...styleLoaders, { loader: 'sass', options: { sourceMap: true } }] },
      { test: /\.less$/i, use: [...styleLoaders, { loader: 'less', options: { sourceMap: true } }] },
      {
        test: /\.jpe?g|png|bmp|gif$/i,
        use: [{
          loader: 'url',
          options: {
            limit: 8192
          }
        }]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: root('src/index.html'),
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true,
        minifyJS: true,
        minifyCSS: true
      }
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new CopyPlugin([{ from: './src/static', to: './static' }])
  ]
}
