/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

/**
 * プロジェクト詳細ページの生成
 */
const createProjectPages = async (graphql, actions) => {
  const { createPage } = actions;
  const getProjectsResult = await graphql(`
    query {
      allContentfulProject(filter: { node_locale: { eq: "en" } }) {
        edges {
          node {
            id
            slug
          }
        }
      }
    }
  `);
  if (getProjectsResult.errors) {
    throw getProjectsResult.errors;
  }
  const projects = getProjectsResult.data.allContentfulProject.edges || [];
  projects.forEach(({ node }) => {
    createPage({
      path: `/projects/${node.slug}`,
      component: path.join(__dirname, 'src', 'templates', 'project.tsx'),
      context: { id: node.id },
    });
  });
};

exports.createPages = async ({ graphql, actions }) => {
  await createProjectPages(graphql, actions);
};
