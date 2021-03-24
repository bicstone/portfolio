import React from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { makeStyles, Typography, Grid, LinearProgress, CardContent, Card } from '@material-ui/core';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { ContentfulSkillMap, ContentfulTag, Maybe } from 'src/types';
import { ExpansionPanel } from 'src/components';

const useStyles = makeStyles(theme => ({
  cardContent: {
    paddingTop: theme.spacing(2),
    paddingRight: theme.spacing(4),
    paddingBottom: theme.spacing(2),
    paddingLeft: theme.spacing(4),
  },
}));

export type SkillListProps = {
  skills: Array<{
    node: Pick<ContentfulSkillMap, 'id' | 'name' | 'node_locale' | 'expanded'> & {
      skills: Maybe<Array<Maybe<Pick<ContentfulTag, 'id' | 'level' | 'name'>>>>;
    };
  }>;
};

export const SkillList: React.FC<SkillListProps> = ({ skills }) => {
  const classes = useStyles();
  const { language } = useI18next();
  const defaultExpandedBreakpoints: Breakpoint[] = ['xl', 'lg', 'md'];
  return (
    <Grid container spacing={2}>
      {skills.map(
        ({ node }) =>
          node.node_locale === language && (
            <Grid item xs={12} sm={6} md={4} key={node.id}>
              <Card>
                <ExpansionPanel
                  id={node.id}
                  defaultExpanded={node.expanded || false}
                  defaultExpandedBreakpoints={defaultExpandedBreakpoints}
                  title={
                    <Typography component="h2" variant="h6">
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
                              color="primary"
                              variant="determinate"
                              title={`${skill?.level ? skill.level * 20 : 0}%`}
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
