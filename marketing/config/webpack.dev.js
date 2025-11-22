const { merge } = require("webpack-merge");
const htmlWebpackPlugin = require("html-webpack-plugin");
const commonConfig = require("./webpack.common");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');

const devConfig = {
  mode: "development",

  plugins: [
    new htmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new ModuleFederationPlugin({
      name: "marketing",
      filename: "remoteEntry.js",
      exposes: {
        "./MarkeingIndex": "./src/bootstrap.js",
      },
      shared: packageJson.dependencies,
    }),
  ],

  devServer: {
    port: 8081,
    historyApiFallback: {
        index: "/index.html",
    }
  },
};

module.exports = merge(devConfig, commonConfig);
