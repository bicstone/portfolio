import React from 'react';
import { graphql, PageProps } from 'gatsby';
import Img from 'gatsby-image';

import { Typography, Button, Chip } from '@material-ui/core';
import LinkIcon from '@material-ui/icons/Link';
import GitHubIcon from '@material-ui/icons/GitHub';

import Layout from '../components/Layout';

import { ProjectDetailDataQuery } from '../types/graphqlTypes';

interface Props extends PageProps {
  data: ProjectDetailDataQuery;
}

const project: React.FC<Props> = ({ path, data }) => {
  const project = data?.contentfulProject;
  return (
    <Layout pathname={path}>
      <Typography variant="h4" component="h1" gutterBottom>
        {project?.name}
      </Typography>
      {project?.siteUrl && (
        <Button
          variant="contained"
          color="primary"
          startIcon={<LinkIcon />}
          href={project?.siteUrl}
          rel="nofollow external noopener noreferrer"
          target="_blank"
        >
          外部リンク
        </Button>
      )}
      {project?.sourceUrl && (
        <Button
          variant="contained"
          color="primary"
          startIcon={<GitHubIcon />}
          href={project?.sourceUrl}
          rel="nofollow external noopener noreferrer"
          target="_blank"
        >
          ソースコード
        </Button>
      )}
      {project?.mainImage?.localFile?.childImageSharp?.fluid && (
        <Img
          fluid={project.mainImage.localFile.childImageSharp.fluid}
          alt={project.mainImage.title ?? ''}
        />
      )}
      <Typography gutterBottom>{project?.startDate}</Typography>
      <Typography gutterBottom>{project?.during}</Typography>
      {project?.roles?.map(role => (
        <Chip label={role?.name} size="small" key={role?.name} />
      ))}
      {project?.assigns?.map(assign => (
        <Chip label={assign?.name} size="small" key={assign?.name} />
      ))}
      {project?.systems?.map(system => (
        <Chip label={system?.name} size="small" key={system?.name} />
      ))}
      {project?.languages?.map(language => (
        <Chip label={language?.name} size="small" key={language?.name} />
      ))}
      {project?.tools?.map(tool => (
        <Chip label={tool?.name} size="small" key={tool?.name} />
      ))}
      <Typography gutterBottom>{project?.comment}</Typography>
    </Layout>
  );
};

export default project;

export const pageQuery = graphql`
  query ProjectDetailData($id: String) {
    contentfulProject(id: { eq: $id }) {
      id
      node_locale
      name
      slug
      startDate(formatString: "YYYY")
      during
      comment
      mainImage {
        title
        file {
          url
        }
        localFile {
          childImageSharp {
            fluid {
              sizes
              src
              srcSet
              aspectRatio
            }
          }
        }
      }
      siteUrl
      sourceUrl
      roles {
        name
      }
      assigns {
        name
      }
      systems {
        name
      }
      languages {
        name
      }
      tools {
        name
      }
    }
  }
`;
