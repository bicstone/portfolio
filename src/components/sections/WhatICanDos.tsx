import React from 'react';
import parse from 'html-react-parser';
import { graphql, useStaticQuery } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { Typography, Grid, Avatar, CardHeader, Card, SvgIcon } from '@material-ui/core';
import { WhatICanDoDataQuery } from '../../types';

export const WhatICanDos: React.FC = () => {
  const { language } = useI18next();

  const { allContentfulWhatICanDo }: WhatICanDoDataQuery = useStaticQuery(
    graphql`
      query WhatICanDoData {
        allContentfulWhatICanDo(sort: { fields: sortKey, order: ASC }) {
          edges {
            node {
              id
              node_locale
              name
              subName
              icon {
                svg {
                  svg
                }
              }
            }
          }
        }
      }
    `,
  );

  return (
    <Grid container spacing={2} alignItems="center">
      {allContentfulWhatICanDo.edges.map(
        ({ node }) =>
          node.node_locale === language && (
            <Grid item xs={12} sm={6} md={4} key={node.id}>
              <Card>
                <CardHeader
                  avatar={
                    node.icon?.svg?.svg && (
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
                  subheader={
                    <Typography variant="body1" color="textSecondary">
                      {node.subName}
                    </Typography>
                  }
                />
              </Card>
            </Grid>
          ),
      )}
    </Grid>
  );
};
