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

type Tags = Array<{ name?: string | null } | null | undefined> | null | undefined;

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

  const subHeader = (
    expanded: boolean,
    roles: Tags,
    languages: Tags,
    systems: Tags,
    tools: Tags,
    assigns: Tags,
  ) =>
    React.useMemo(() => {
      const joinTags = (tags: Tags) => tags?.map(tag => tag?.name).join(' / ');

      if (expanded) {
        return `
        ${joinTags(roles)} / ${joinTags(assigns)} / ${joinTags(languages)} / ${joinTags(
          systems,
        )} / ${joinTags(tools)}
        `;
      }
      return `${joinTags(roles)} / ${joinTags(languages)} / ${joinTags(systems)}`;
    }, [expanded, roles, languages, systems, tools]);

  const { allContentfulProject }: ProjectDataQuery = useStaticQuery(
    graphql`
      query ProjectData {
        allContentfulProject {
          edges {
            node {
              id
              node_locale
              name
              startDate
              during
              comment
              roles {
                name
              }
              systems {
                name
              }
              languages {
                name
              }
              tools {
                name
              }
              assigns {
                name
              }
              icon {
                contents {
                  contents
                }
              }
            }
          }
        }
      }
    `,
  );

  return (
    <Grid container spacing={2} justify="center" alignItems="center">
      <Grid item sm={12}>
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
                      node?.icon?.contents?.contents && (
                        <Avatar>
                          <SvgIcon>{parse(node.icon.contents.contents)}</SvgIcon>
                        </Avatar>
                      )
                    }
                    title={
                      <Typography component="h3" variant="h6">
                        {node.name}
                      </Typography>
                    }
                    subheader={subHeader(
                      expanded === node.id,
                      node.roles,
                      node.languages,
                      node.systems,
                      node.tools,
                      node.assigns,
                    )}
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant="body2">{node.comment}</Typography>
                </AccordionDetails>
              </Accordion>
            ),
        )}
      </Grid>
    </Grid>
  );
};
