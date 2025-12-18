const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/auth/latest/",
  },
  plugins:[
    new ModuleFederationPlugin({
      name: "AuthApp",
      filename: "remoteEntry.js",
      exposes: {
        "./AuthIndex": "./src/bootstrap.js",
      },
      shared: packageJson.dependencies,
    })      
  ]
};  

module.exports = merge(prodConfig, commonConfig);