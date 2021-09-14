const HtmlWebpackPlugin = require('html-webpack-plugin')
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
  mode: 'development',
  devServer: {
    port: 8082,
  },
  plugins: [
    new ModuleFederationPlugin({
      exposes: {
        './CartShow': './src/bootstrap'
      },
      filename: 'remoteEntry.js',
      name: 'cartModule',
      shared: ['faker']
    }),

    new HtmlWebpackPlugin({
      template: './public/index.html',
    })
  ],
}
