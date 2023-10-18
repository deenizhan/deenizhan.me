const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)
const { config } = require(`./src/configs`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode })

    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `).then(result => {
    const posts = result.data.allMdx.edges

    createPage({
      path: `/`,
      component: path.resolve("./src/templates/hello-template.js"),
    })

    // if (process.env.NODE_ENV === "DEV") {
    //   createPage({
    //     path: `/panel`,
    //     component: path.resolve("./src/templates/admin-template.js"),
    //   })
    // }

    // Array.from({ length: numPages }).forEach((_, i) => {
    //   createPage({
    //     path: i === 0 ? `/journal` : `/journal/${i + 1}`,
    //     component: path.resolve("./src/templates/blog-list-template.js"),
    //     context: {
    //       limit: postsPerPage,
    //       skip: i * postsPerPage,
    //       numPages,
    //       currentPage: i + 1,
    //     },
    //   })
    // })

    posts.forEach(({ node }) => {
      createPage({
        path: `blog/${node.frontmatter.slug}`,
        component: path.resolve(`./src/templates/{mdx.frontmatter__slug}.js`),
        context: {
          slug: node.frontmatter.slug,
        },
      })
    })
  })
}
