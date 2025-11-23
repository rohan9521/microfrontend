const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

const prodConfig = {
  mode: "production",
  plugins:[
    new ModuleFederationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./MarkeingIndex": "./src/bootstrap.js",
      },
      shared: packageJson.dependencies,
    })      
  ]
};  

module.exports = merge(prodConfig, commonConfig);