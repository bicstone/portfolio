import React from 'react';

import { Typography, Grid, CardHeader, Card } from '@mui/material';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { SvgAvatar } from 'src/components';
import { IndexPageQuery } from 'src/types';

export type WhatICanDoListProps = {
  whatICanDos: IndexPageQuery['whatICanDos']['edges'];
};

/**
 * お手伝いできることリスト
 */
export const WhatICanDoList: React.FC<WhatICanDoListProps> = ({ whatICanDos }) => {
  const { language } = useI18next();
  return (
    <Grid container spacing={2} alignItems="center">
      {whatICanDos.map(
        ({ node }) =>
          node.node_locale === language && (
            <Grid item xs={12} sm={6} md={4} key={node.id} component="section">
              <Card>
                <CardHeader
                  avatar={
                    <SvgAvatar name={node?.icon?.name || ''} svg={node?.icon?.svg?.svg || ''} />
                  }
                  title={
                    <Typography component="h2" variant="h6">
                      {node.name}
                    </Typography>
                  }
                  subheader={
                    <Typography variant="body1" color="textSecondary">
                      {node.subName}
                    </Typography>
                  }
                  disableTypography
                />
              </Card>
            </Grid>
          ),
      )}
    </Grid>
  );
};
