const { defineConfig } = require('@vue/cli-service')
const { ModuleFederationPlugin } = require("webpack").container;

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: 'auto',
  configureWebpack: {
    cache: {
      type: 'filesystem'
    },
    optimization: {
      splitChunks: false
    },
    plugins: [
      new ModuleFederationPlugin({
        name: 'AAA',
        filename: `remoteEntry.js`,
        exposes: {
          './AAA': './src/App.vue'
        },
        // shared: require("./package.json").dependencies
      })
    ]
  }
})
