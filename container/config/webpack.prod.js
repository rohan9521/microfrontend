const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const packageJson = require("../package.json");
const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");
const webpack = require("webpack");

const prodConfig = {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "/container/latest/",
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.PRODUCTION_DOMAIN": JSON.stringify(
        process.env.PRODUCTION_DOMAIN
      ),
    }),
    new ModuleFederationPlugin({
      name: "container_ecom",
      remotes: {
        marketing: `marketing@https://d16serwv30k928.cloudfront.net/marketing/latest/remoteEntry.js`,
        auth: `auth@https://d16serwv30k928.cloudfront.net/auth/latest/remoteEntry.js`,
        dashboard: `dashboard@https://d16serwv30k928.cloudfront.net/dashboard/latest/remoteEntry.js`,
      },
      shared: packageJson.dependencies,
    }),
  ],
};

module.exports = merge(prodConfig, commonConfig);
