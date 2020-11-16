import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
import {
  makeStyles,
  Typography,
  Grid,
  LinearProgress,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import { useBreakPoint } from '../../hooks';
import { SkillDataQuery } from '../../types';

const useStyles = makeStyles(() => ({
  accordionDetails: {
    display: 'block',
  },
}));

export const Skills: React.FC = () => {
  const classes = useStyles();
  const { language } = useI18next();
  const width = useBreakPoint();
  const AUTO_EXPANDED_WIDTH: Breakpoint[] = ['lg', 'xl', 'md'];
  const { allContentfulSkillMap }: SkillDataQuery = useStaticQuery(
    graphql`
      query SkillData {
        allContentfulSkillMap(sort: { order: ASC, fields: sort }) {
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
              <Accordion defaultExpanded={node.expanded || AUTO_EXPANDED_WIDTH.includes(width)}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`skill${node.id}-content`}
                  id={`skill${node.id}-header`}
                >
                  <Typography component="h3" variant="h6">
                    {node.name}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
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
                </AccordionDetails>
              </Accordion>
            </Grid>
          ),
      )}
    </Grid>
  );
};
