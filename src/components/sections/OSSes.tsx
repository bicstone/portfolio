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
  Card,
  Avatar,
  CardMedia,
  SvgIcon,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import { OssDataQuery } from '../../types';

const useStyles = makeStyles(theme => ({
  cardContent: {
    paddingTop: '0!important',
    paddingLeft: '0!important',
    paddingBottom: `${theme.spacing(0.5)}px!important`,
    paddingRight: '0!important',
  },
  cardMedia: {
    height: theme.spacing(20),
  },
}));

export const OSSes: React.FC = () => {
  const classes = useStyles();
  const { language } = useI18next();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (id: string) => (
    event: React.ChangeEvent<Record<string, unknown>>,
    isExpanded: boolean,
  ) => {
    setExpanded(isExpanded ? id : false);
  };

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
                <CardMedia>
                  {node?.image?.localFile?.childImageSharp?.fluid && (
                    <Img
                      fluid={node.image.localFile.childImageSharp.fluid}
                      alt={node.name ?? ''}
                      className={classes.cardMedia}
                    />
                  )}
                </CardMedia>
                <Accordion
                  expanded={expanded === node.id}
                  onChange={handleChange(node.id)}
                  key={node.id}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`${node.id}-content`}
                    id={`${node.id}-header`}
                  >
                    <CardContent className={classes.cardContent}>
                      <Typography variant="body2" color="textSecondary">
                        {node.subName}
                      </Typography>
                    </CardContent>
                  </AccordionSummary>
                  <AccordionDetails>
                    <CardContent className={classes.cardContent}>
                      <Typography variant="body2">
                        {node?.detail?.childMarkdownRemark?.html &&
                          parse(node.detail.childMarkdownRemark.html)}
                      </Typography>
                    </CardContent>
                  </AccordionDetails>
                </Accordion>
              </Card>
            </Grid>
          ),
      )}
    </Grid>
  );
};
