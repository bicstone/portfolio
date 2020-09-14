import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';

import {
  Typography,
  Grid,
  Container,
  CardHeader,
  CardContent,
  Card,
  Avatar,
  CardMedia,
  Chip,
} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import DevicesIcon from '@material-ui/icons/Devices';
import { ProjectDataQuery } from '../types/graphqlTypes';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  cardContent: {
    paddingTop: 0,
  },
}));

const Project: React.FC = () => {
  const classes = useStyles();
  const { t, language } = useI18next();
  const { allContentfulProject }: ProjectDataQuery = useStaticQuery(
    graphql`
      query ProjectData {
        allContentfulProject {
          edges {
            node {
              node_locale
              name
              slug
              startDate
              during
              comment
              mainImage {
                title
                file {
                  url
                  details {
                    image {
                      height
                      width
                    }
                  }
                }
              }
              siteUrl
              sourceUrl
              role {
                name
              }
              assigne {
                name
              }
              system {
                name
              }
              language {
                name
              }
              tools {
                name
              }
            }
          }
        }
      }
    `,
  );

  return (
    <Container maxWidth="lg">
      <Typography component="h2" variant="h4" align="center">
        {t('project.title')}
      </Typography>
      <Grid container spacing={2} className={classes.mainGrid} justify="center" alignItems="center">
        {allContentfulProject.edges.map(
          ({ node }) =>
            node.node_locale === language && (
              <Grid item xs={12} sm={6} md={4}>
                <Card>
                  <CardHeader
                    avatar={
                      <Avatar>
                        <DevicesIcon />
                      </Avatar>
                    }
                    title={
                      <Typography component="h3" variant="h6">
                        {node.name}
                      </Typography>
                    }
                    subheader={node.role ? node.role.map(role => role?.name).join(' / ') : ''}
                  />
                  <CardMedia
                    image="http://placekitten.com/1600/900"
                    title="G3M"
                    style={{ paddingTop: '56.25%' }}
                  />
                  <CardContent>
                    {node?.language?.map(language => (
                      <Chip label={language?.name} size="small" key={language?.name} />
                    ))}
                    {node?.system?.map(system => (
                      <Chip label={system?.name} size="small" key={system?.name} />
                    ))}
                  </CardContent>
                  <CardContent className={classes.cardContent}>
                    <Typography variant="body2">{node.comment}</Typography>
                  </CardContent>
                </Card>
              </Grid>
            ),
        )}
      </Grid>
    </Container>
  );
};

export default Project;
