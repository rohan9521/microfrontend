const htmlwebpackplugin = require('html-webpack-plugin');
const moduleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')

module.exports = {
    mode: 'development',
    devServer: {
        port: 8000
    },
    plugins: [
        new htmlwebpackplugin({
            template: './public/index.html'
        }),
        new moduleFederationPlugin({
            name: 'container',
            remotes: {
                products: 'products@http://localhost:3000/remoteEntry.js',
                cart: 'cart@http://localhost:8082/remoteEntry.js'
            }
        })
    ] 
}