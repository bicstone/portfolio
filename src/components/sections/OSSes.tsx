import React from 'react';
import parse from 'html-react-parser';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import { useI18next } from 'gatsby-plugin-react-i18next';
import {
  makeStyles,
  Typography,
  Grid,
  CardHeader,
  CardContent,
  CardActionArea,
  Card,
  Avatar,
  CardMedia,
  SvgIcon,
} from '@material-ui/core';
import { OssDataQuery } from '../../types';
import { ExpandCardContent } from '../../components';

const useStyles = makeStyles(() => ({
  cardMedia: {
    height: 0,
    paddingTop: '56.25%', // 16:9
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
              tags {
                name
              }
              icon {
                svg {
                  svg
                }
              }
              image {
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
              subName
              detail {
                childMarkdownRemark {
                  html
                }
              }
              startDate(formatString: "yyyy/MM")
              href
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
                <CardActionArea
                  title={node.name || ''}
                  href={node.href || ''}
                  rel="external noreferrer noopener nofollow"
                  target="_blank"
                >
                  <CardMedia>
                    {node?.image?.localFile?.childImageSharp?.fluid && (
                      <Img
                        fluid={node.image.localFile.childImageSharp.fluid}
                        alt={node.name ?? ''}
                        className={classes.cardMedia}
                      />
                    )}
                  </CardMedia>
                  <CardHeader
                    avatar={
                      node?.icon?.svg?.svg && (
                        <Avatar>
                          <SvgIcon>{parse(node.icon.svg.svg)}</SvgIcon>
                        </Avatar>
                      )
                    }
                    title={
                      <Typography component="h3" variant="h6">
                        {node.name}
                      </Typography>
                    }
                    subheader={node.tags ? node.tags.map(tag => tag?.name).join(' / ') : ''}
                  />
                </CardActionArea>
                <ExpandCardContent
                  id={node.id}
                  defaultExpanded={false}
                  title={
                    <Typography variant="body2" color="textSecondary" paragraph>
                      {node.subName}
                    </Typography>
                  }
                  detail={
                    <CardContent>
                      <Typography variant="body2" component="div">
                        {node?.detail?.childMarkdownRemark?.html &&
                          parse(node.detail.childMarkdownRemark.html)}
                      </Typography>
                    </CardContent>
                  }
                />
              </Card>
            </Grid>
          ),
      )}
    </Grid>
  );
};
