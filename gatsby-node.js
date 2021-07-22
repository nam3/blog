const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            frontmatter {
              path_alias
              published_date(formatString: "YYYY年MM月DD日")
              title
            }
            body
          }
        }
      }
    }
  `);
  result.data.allMdx.edges.forEach((v) => {
    createPage({
      path: `${v.node.frontmatter.path_alias}`,
      component: path.resolve(`src/templates/blog.js`),
      context: {
        title: v.node.frontmatter.title,
        publishedDate: v.node.frontmatter.published_date,
        body: v.node.body,
      },
    });
  });
};
