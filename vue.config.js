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
        name: 'App',
        filename: `remoteEntry.js`,
        exposes: {
          './AButton': './src/App.vue',
          './AInput': './src/AInput.vue'
        },
        // shared: require("./package.json").dependencies
      })
    ]
  }
})
