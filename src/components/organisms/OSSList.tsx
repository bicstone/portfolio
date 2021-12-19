import React from 'react';

import { Typography, Grid, CardHeader, CardActionArea, Card, CardMedia, Chip } from '@mui/material';
import { GatsbyImage } from 'gatsby-plugin-image';
import { useI18next } from 'gatsby-plugin-react-i18next';

import { SvgAvatar } from 'src/components';
import { IndexPageQuery } from 'src/types';

export type OSSListProps = {
  osses: IndexPageQuery['osses']['edges'];
};

/**
 * OSS 一覧
 */
export const OSSList: React.FC<OSSListProps> = ({ osses }) => {
  const { language } = useI18next();

  return (
    <Grid container spacing={2} justifyContent="flex-start" alignItems="flex-start">
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
                        css={{
                          height: 0,
                          paddingTop: '56.25%', // 16:9
                        }}
                        image={node.image.localFile.childImageSharp.gatsbyImageData}
                        alt={node.name || ''}
                      />
                    )}
                  </CardMedia>
                  <CardHeader
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
                </CardActionArea>
              </Card>
            </Grid>
          ),
      )}
    </Grid>
  );
};
