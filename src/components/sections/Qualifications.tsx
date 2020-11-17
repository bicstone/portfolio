import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
import {
  makeStyles,
  Typography,
  Grid,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { useBreakPoint } from '../../hooks';
import { QualificationMapDataQuery } from '../../types';

const useStyles = makeStyles(() => ({
  accordionDetails: {
    display: 'block',
  },
}));

export const Qualifications: React.FC = () => {
  const classes = useStyles();
  const { language } = useI18next();
  const width = useBreakPoint();
  const AUTO_EXPANDED_WIDTH: Breakpoint[] = ['lg', 'xl', 'md'];
  const { allContentfulQualificationMap }: QualificationMapDataQuery = useStaticQuery(
    graphql`
      query QualificationMapData {
        allContentfulQualificationMap(sort: { order: ASC, fields: sort }) {
          edges {
            node {
              id
              name
              node_locale
              expanded
              qualifications {
                id
                name
                date(formatString: "yyyy/MM")
              }
            }
          }
        }
      }
    `,
  );

  return (
    <Grid container spacing={2}>
      {allContentfulQualificationMap.edges.map(
        ({ node }) =>
          node.node_locale === language && (
            <Grid item xs={12} sm={6} md={4} key={node.id}>
              <Accordion defaultExpanded={node.expanded || AUTO_EXPANDED_WIDTH.includes(width)}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`certifications-${node.id}-content`}
                  id={`certifications-${node.id}-header`}
                >
                  <Typography component="h3" variant="h6">
                    {node.name}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails className={classes.accordionDetails}>
                  <List dense={true}>
                    {node?.qualifications?.map(
                      qualification =>
                        qualification && (
                          <ListItem key={qualification.id}>
                            <ListItemText
                              primary={qualification.name}
                              secondary={qualification.date}
                            />
                          </ListItem>
                        ),
                    )}
                  </List>
                </AccordionDetails>
              </Accordion>
            </Grid>
          ),
      )}
    </Grid>
  );
};
