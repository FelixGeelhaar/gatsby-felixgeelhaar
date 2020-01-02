const path = require("path")

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const result = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panic(`failed to create posts: ${result.errors}`)
  }

  const posts = result.data.allMarkdownRemark.edges

  posts.forEach(({ node: post }) => {
    actions.createPage({
      path: post.frontmatter.slug,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: `${post.frontmatter.slug}`,
      },
    })
  })
}
