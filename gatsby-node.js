const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query BlogPostList {
      allContentfulBlogPost {
        edges {
          node {
            id
            title
            slug
            created
            updated
            excerpt
            content {
              content
            }
            tags {
              name
            }
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;
  if (!result.data) throw Error;

  result.data.allContentfulBlogPost.edges.forEach((post, index, posts) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: post.node.slug,
      component: path.resolve('./src/components/templates/BlogPost.tsx'),
      context: {
        id: post.node.id,
        slug: post.node.slug,
        previous,
        next,
      },
    });
  });
};
