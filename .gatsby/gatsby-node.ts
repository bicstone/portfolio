import path from 'path';
import { GatsbyNode } from 'gatsby';
import { AllBlogDataQuery } from '../src/types';

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
 query AllBlogData {
  allNotionPageBlog(sort: {fields: [tags, createdAt], order: [ASC, DESC]}) {
    edges {
      node {
        pageId
        slug
        pageIcon
        title
      }
    }
  }
}
  `)
  if (result.errors) throw result.errors

  const data = result.data as AllBlogDataQuery

  if (!data) throw Error

  data.allNotionPageBlog.edges.forEach((post, index, posts) => {
    const previous = index === posts.length - 1 ? null : posts[index + 1].node
    const next = index === 0 ? null : posts[index - 1].node

    createPage({
      path: post.node.slug,
      component: path.resolve('./src/components/templates/BlogPost.tsx'),
      context: {
        pageId: post.node.pageId,
        slug: post.node.slug,
        previous,
        next,
      },
    })
  })
}
