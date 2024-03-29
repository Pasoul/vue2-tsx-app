module.exports = {
  css: {
    requireModuleExtension: true,
    loaderOptions: {
      less: {},
    },
  },
  configureWebpack: {
    resolve: {
      extensions: [".js", ".vue", ".json", ".ts", ".tsx"], // 加入ts 和 tsx
    },
  },
  devServer: {
    port: 5212,
  },
};
