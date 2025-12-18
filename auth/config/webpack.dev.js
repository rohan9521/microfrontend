const { merge } = require("webpack-merge");
const htmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

const devConfig = {
  mode: "development",
  output: {
    filename: "[name].js",
    publicPath: "http://localhost:8083/",
  },
  plugins: [
    
    new ModuleFederationPlugin({
      name: "auth",
      filename: "remoteEntry.js",
      exposes: {
        "./AuthIndex": "./src/bootstrap.js",
      },
      shared: packageJson.dependencies,
    }),
  ],

  devServer: {
    port: 8083,
    historyApiFallback: {
        index: "/index.html",
    }
  },
};

module.exports = merge(devConfig, commonConfig);
