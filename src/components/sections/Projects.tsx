import React from 'react';
import parse from 'html-react-parser';
import { graphql, useStaticQuery } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
import {
  makeStyles,
  Typography,
  Grid,
  CardHeader,
  Avatar,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  SvgIcon,
} from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import { ProjectDataQuery } from '../../types';

const useStyles = makeStyles(() => ({
  cardHeader: {
    padding: 0,
  },
}));

export const Projects: React.FC = () => {
  const classes = useStyles();
  const { language } = useI18next();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (id: string) => (
    event: React.ChangeEvent<Record<string, unknown>>,
    isExpanded: boolean,
  ) => {
    setExpanded(isExpanded ? id : false);
  };

  const { allContentfulProject }: ProjectDataQuery = useStaticQuery(
    graphql`
      query ProjectData {
        allContentfulProject(sort: { fields: startDate, order: DESC }) {
          edges {
            node {
              id
              node_locale
              name
              tags {
                name
              }
              icon {
                svg {
                  svg
                }
              }
              subName
              detail {
                childMarkdownRemark {
                  html
                }
              }
              startDate(formatString: "YYYY/MM")
              endDate(formatString: "YYYY/MM")
              startDateRow: startDate(formatString: "YYYY-MM-DD")
              endDateRow: endDate(formatString: "YYYY-MM-DD")
            }
          }
        }
      }
    `,
  );

  return (
    <Grid container spacing={2} justify="center" alignItems="center">
      <Grid item xs={12}>
        {allContentfulProject.edges.map(
          ({ node }) =>
            node.node_locale === language && (
              <Accordion
                expanded={expanded === node.id}
                onChange={handleChange(node.id)}
                key={node.id}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`${node.id}-content`}
                  id={`${node.id}-header`}
                >
                  <CardHeader
                    className={classes.cardHeader}
                    avatar={
                      node?.icon?.svg?.svg && (
                        <Avatar>
                          <SvgIcon>{parse(node.icon.svg.svg)}</SvgIcon>
                        </Avatar>
                      )
                    }
                    title={
                      <Typography component="h2" variant="h6">
                        {node.name}
                      </Typography>
                    }
                    subheader={node.tags ? node.tags.map(tag => tag?.name).join(' / ') : ''}
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2" component="div">
                    {node?.detail?.childMarkdownRemark?.html &&
                      parse(node.detail.childMarkdownRemark.html)}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ),
        )}
      </Grid>
    </Grid>
  );
};
