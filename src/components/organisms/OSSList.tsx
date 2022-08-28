import React from 'react';

import { Typography, Grid, CardHeader, CardActionArea, Card, Chip } from '@mui/material';
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
      {osses
        .filter(({ node }) => node.node_locale === language)
        ?.map(({ node }) => (
          <Grid item xs={12} sm={6} md={4} key={node.id} component="section">
            <Card>
              <CardActionArea
                title={node.name || ''}
                href={node.href || ''}
                rel="external noreferrer noopener nofollow"
                target="_blank"
              >
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
        ))}
    </Grid>
  );
};
