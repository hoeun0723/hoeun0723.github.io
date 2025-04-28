const path = require('path')
// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions
//   createPage({
//     path: "/using-dsg",
//     component: require.resolve("./src/templates/using-dsg.js"),
//     context: {},
//     defer: true,
//   })
// }

// Setup Import Alias
exports.onCreateWebpackConfig = ({getConfig,actions}) => {
  const output = getConfig().output || {}

  actions.setWebpackConfig({
    output,
    resolve: {
      alias: {
        '@' : path.resolve(__dirname,'./src'),
      },
    },
  })
}
