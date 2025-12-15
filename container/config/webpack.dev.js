const { merge } = require("webpack-merge");
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require("./webpack.common");

const packageJson = require('../package.json');

const devConfig = {
  mode: "development",

  plugins: [
    new ModuleFederationPlugin({
      name: "container_ecom",
      remotes: {
        "marketing": "marketing@http://localhost:8081/remoteEntry.js",
      },
      shared: packageJson.dependencies,
    })
  ],

  devServer: {
    port: 8000,
    historyApiFallback: {
        index: "/index.html",
    }
  },
};

module.exports = merge(devConfig, commonConfig);
