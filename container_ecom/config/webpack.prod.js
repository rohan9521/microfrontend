const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const packageJson = require('../package.json');
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: "production",
  plugins: [
    new ModuleFederationPlugin({
      name: "container_ecom",
      remotes: {
        "marketing": `marketing@${domain}/marketing/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    })
  ],
};  

module.exports = merge(prodConfig, commonConfig);