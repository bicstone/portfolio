import React from 'react';
import parse from 'html-react-parser';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useI18next } from 'gatsby-plugin-react-i18next';
import {
  makeStyles,
  Typography,
  Grid,
  CardHeader,
  CardContent,
  CardActionArea,
  Card,
  CardMedia,
  Chip,
} from '@material-ui/core';
import {
  ContentfulAsset,
  ContentfulAssetFile,
  ContentfulIcon,
  ContentfulIconSvgTextNode,
  ContentfulOss,
  ContentfulTag,
  ImageSharp,
  MarkdownRemark,
  Maybe,
} from 'src/types';
import { ExpansionPanel, SvgAvatar } from 'src/components';

const useStyles = makeStyles(() => ({
  cardMedia: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardHeader: {
    paddingLeft: 0,
    paddingRight: 0,
  },
}));

export type OSSListProps = {
  osses: Array<{
    node: Pick<ContentfulOss, 'id' | 'node_locale' | 'name' | 'subName' | 'startDate' | 'href'> & {
      tags: Maybe<Array<Maybe<Pick<ContentfulTag, 'name'>>>>;
      icon: Maybe<
        Pick<ContentfulIcon, 'name'> & { svg: Maybe<Pick<ContentfulIconSvgTextNode, 'svg'>> }
      >;
      image: Maybe<
        Pick<ContentfulAsset, 'title'> & {
          file: Maybe<Pick<ContentfulAssetFile, 'url'>>;
          localFile: Maybe<{ childImageSharp: Maybe<Pick<ImageSharp, 'gatsbyImageData'>> }>;
        }
      >;
      detail: Maybe<{ childMarkdownRemark: Maybe<Pick<MarkdownRemark, 'html'>> }>;
    };
  }>;
};
export const OSSList: React.FC<OSSListProps> = ({ osses }) => {
  const classes = useStyles();
  const { language } = useI18next();

  return (
    <Grid container spacing={2} justify="flex-start" alignItems="flex-start">
      {osses.map(
        ({ node }) =>
          node.node_locale === language && (
            <Grid item xs={12} sm={6} md={4} key={node.id} component="section">
              <Card>
                <CardActionArea
                  title={node.name || ''}
                  href={node.href || ''}
                  rel="external noreferrer noopener nofollow"
                  target="_blank"
                >
                  <CardMedia>
                    {node?.image?.localFile?.childImageSharp?.gatsbyImageData && (
                      <GatsbyImage
                        image={node.image.localFile.childImageSharp.gatsbyImageData}
                        alt={node.name || ''}
                        className={classes.cardMedia}
                      />
                    )}
                  </CardMedia>
                </CardActionArea>
                <ExpansionPanel
                  id={node.id}
                  defaultExpanded={false}
                  title={
                    <CardHeader
                      className={classes.cardHeader}
                      avatar={
                        <SvgAvatar name={node?.icon?.name || ''} svg={node?.icon?.svg?.svg || ''} />
                      }
                      title={
                        <>
                          <Typography variant="body2" component="div" color="textSecondary">
                            {node?.startDate}～
                          </Typography>
                          <Typography component="h2" variant="h6">
                            {node.name}
                          </Typography>
                        </>
                      }
                      subheader={
                        <Typography variant="body2" component="div" color="textSecondary">
                          {node.tags &&
                            node.tags.map(
                              tag =>
                                tag?.name && (
                                  <Chip
                                    variant="outlined"
                                    size="small"
                                    key={tag.name}
                                    label={tag.name}
                                  />
                                ),
                            )}
                        </Typography>
                      }
                      disableTypography
                    />
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
