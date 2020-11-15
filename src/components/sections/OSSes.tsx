import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { useI18next } from 'gatsby-plugin-react-i18next';
import {
  makeStyles,
  Typography,
  Grid,
  CardHeader,
  CardContent,
  Card,
  Avatar,
  CardMedia,
  Chip,
} from '@material-ui/core/';
import { Devices as DevicesIcon } from '@material-ui/icons';
import { OssDataQuery } from '../../types';

const useStyles = makeStyles(theme => ({
  cardContent: {
    paddingTop: 0,
  },
  cardMedia: {
    height: theme.spacing(20),
  },
}));

export const OSSes: React.FC = () => {
  const classes = useStyles();
  const { language } = useI18next();
  const { allContentfulOss }: OssDataQuery = useStaticQuery(
    graphql`
      query OssData {
        allContentfulOss {
          edges {
            node {
              id
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
        }
      }
    `,
  );

  return (
    <Grid container spacing={2} justify="center" alignItems="center">
      {allContentfulOss.edges.map(
        ({ node }) =>
          node.node_locale === language && (
            <Grid item xs={12} sm={6} md={4} key={node.id}>
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
                  subheader={node.roles ? node.roles.map(role => role?.name).join(' / ') : ''}
                />
                <CardMedia>
                  {node?.mainImage?.localFile?.childImageSharp?.fluid && (
                    <Img
                      fluid={node.mainImage.localFile.childImageSharp.fluid}
                      alt={node.mainImage.title ?? ''}
                      className={classes.cardMedia}
                    />
                  )}
                </CardMedia>
                <CardContent>
                  {node?.languages?.map(language => (
                    <Chip label={language?.name} size="small" key={language?.name} />
                  ))}
                  {node?.systems?.map(system => (
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
  );
};
