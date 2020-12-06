import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { makeStyles, Typography, Grid, LinearProgress, CardContent, Card } from '@material-ui/core';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { ExpandCardContent } from '../../components';
import { SkillDataQuery } from '../../types';

const useStyles = makeStyles(theme => ({
  cardContent: {
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(4),
  },
}));

export const Skills: React.FC = () => {
  const classes = useStyles();
  const { language } = useI18next();
  const defaultExpandedBreakpoints: Breakpoint[] = ['xl', 'lg', 'md'];
  const { allContentfulSkillMap }: SkillDataQuery = useStaticQuery(
    graphql`
      query SkillData {
        allContentfulSkillMap(sort: { order: ASC, fields: sortKey }) {
          edges {
            node {
              id
              name
              node_locale
              expanded
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
    <Grid container spacing={2}>
      {allContentfulSkillMap.edges.map(
        ({ node }) =>
          node.node_locale === language && (
            <Grid item xs={12} sm={6} md={4} key={node.id}>
              <Card>
                <ExpandCardContent
                  id={node.id}
                  defaultExpanded={node.expanded || false}
                  defaultExpandedBreakpoints={defaultExpandedBreakpoints}
                  title={
                    <Typography component="h3" variant="h6">
                      {node.name}
                    </Typography>
                  }
                  detail={
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
                  }
                />
              </Card>
            </Grid>
          ),
      )}
    </Grid>
  );
};
