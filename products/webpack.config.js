const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  mode: 'development',
  devServer: {
    port: 8081,
  },
  plugins: [
    new ModuleFederationPlugin({
      exposes: {
        './ProductsIndex': './src/bootstrap'
      },
      filename: 'remoteEntry.js',
      name: 'productsModule',
      shared: ['faker']
    }),

    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ],
}
