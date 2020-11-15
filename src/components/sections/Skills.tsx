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
  LinearProgress,
} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { SkillDataQuery } from '../../types';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  cardContent: {
    paddingTop: 0,
  },
}));

export const Skills: React.FC = () => {
  const classes = useStyles();
  const { language, t } = useI18next();
  const { allContentfulSkillMap }: SkillDataQuery = useStaticQuery(
    graphql`
      query SkillData {
        allContentfulSkillMap {
          edges {
            node {
              id
              name
              node_locale
              skills {
                id
                level
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
        {t('skill-map.title')}
      </Typography>
      <Grid container spacing={2} className={classes.mainGrid}>
        {allContentfulSkillMap.edges.map(
          ({ node }) =>
            node.node_locale === language && (
              <Grid item xs={12} sm={6} md={4} key={node.id}>
                <Card>
                  <CardHeader
                    title={
                      <Typography component="h3" variant="h6">
                        {node.name}
                      </Typography>
                    }
                  />
                  <CardContent className={classes.cardContent}>
                    {node?.skills?.map(skill => (
                      <Grid
                        container
                        spacing={2}
                        justify="center"
                        alignItems="center"
                        key={skill?.id}
                      >
                        <Grid item xs={4}>
                          {skill?.name}
                        </Grid>
                        <Grid item xs={8}>
                          <LinearProgress
                            variant="determinate"
                            value={skill?.level ? skill.level * 20 : 0}
                          />
                        </Grid>
                      </Grid>
                    ))}
                  </CardContent>
                </Card>
              </Grid>
            ),
        )}
      </Grid>
    </Container>
  );
};
