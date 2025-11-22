const htmlwebpackplugin = require('html-webpack-plugin');
const modulefederationplugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports ={
    mode: 'development',
    devServer: {
        port: 3000,
    },
    plugins: [
        new htmlwebpackplugin({
            template: './public/index.html'
        }),
        new modulefederationplugin({
            name: 'products',
            filename: 'remoteEntry.js',
            exposes:{
                './ProductsIndex': './src/bootstrap.js'
            },
            shared:['faker']
        })
    ]
}