import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';

import { Typography, Grid, Container, Card } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { QualificationsDataQuery } from '../types/graphqlTypes';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  cardContent: {
    paddingTop: 0,
  },
}));

const Qualifications: React.FC = () => {
  const classes = useStyles();
  const { language, t } = useI18next();
  const { allContentfulQualifications }: QualificationsDataQuery = useStaticQuery(
    graphql`
      query QualificationsData {
        allContentfulQualifications(sort: { order: DESC, fields: date }) {
          edges {
            node {
              id
              node_locale
              name
              comment
              date
            }
          }
        }
      }
    `,
  );

  return (
    <Container maxWidth="lg">
      <Typography component="h2" variant="h4" align="center">
        {t('skill-map.title')}
      </Typography>
      <Grid container spacing={2} className={classes.mainGrid}>
        {allContentfulQualifications.edges.map(
          ({ node }) =>
            node.node_locale === language && (
              <Grid item xs={12} sm={6} md={4} key={node.id}>
                <Card></Card>
              </Grid>
            ),
        )}
      </Grid>
    </Container>
  );
};

export default Qualifications;
