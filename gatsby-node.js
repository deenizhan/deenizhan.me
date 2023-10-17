exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/components/layout/layout.js"),
    context: {},
    defer: true,
  })
}
