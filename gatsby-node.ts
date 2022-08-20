import path from 'path';

import type { BlogPostsQuery } from './src/types';
import type { GatsbyNode } from 'gatsby';

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query BlogPosts {
      allContentfulBlogPost {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);

  if (result.errors) throw result.errors;
  if (!result.data) throw Error;

  (result.data as BlogPostsQuery).allContentfulBlogPost.edges.forEach((post, index, posts) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node;
    const next = index === 0 ? null : posts[index - 1].node;

    createPage({
      path: post.node.slug,
      component: path.resolve('src/components/templates/BlogPost.tsx'),
      context: {
        id: post.node.id,
        slug: post.node.slug,
        previous,
        next,
      },
    });
  });
};
