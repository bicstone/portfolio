import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';

import {
  Typography,
  Grid,
  Container,
  CardHeader,
  Avatar,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import DevicesIcon from '@material-ui/icons/Devices';
import { ProjectDataQuery } from '../types/graphqlTypes';

type Tag = { name?: string | null } | null | undefined;
type Tags = Array<Tag> | null | undefined;

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
  cardHeader: {
    padding: 0,
  },
}));

const Projects: React.FC = () => {
  const classes = useStyles();
  const { t, language } = useI18next();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (id: string) => (
    event: React.ChangeEvent<Record<string, unknown>>,
    isExpanded: boolean,
  ) => {
    setExpanded(isExpanded ? id : false);
  };

  const subHeader = (expanded: boolean, roles: Tags, languages: Tags, systems: Tags, tools: Tags) =>
    React.useMemo(() => {
      const joinTags = (tags: Tags) => tags?.map(tag => tag?.name).join(' / ');

      if (expanded) {
        return `
        ${joinTags(roles)} / ${joinTags(languages)} / ${joinTags(systems)} / ${joinTags(tools)}
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
            }
          }
        }
      }
    `,
  );

  return (
    <Container maxWidth="lg">
      <Typography component="h2" variant="h4" align="center">
        {t('project.title')}
      </Typography>
      <Grid container spacing={2} className={classes.mainGrid} justify="center" alignItems="center">
        <Grid item sm={12}>
          {allContentfulProject.edges.map(
            ({ node }) =>
              node.node_locale === language && (
                <Accordion expanded={expanded === node.id} onChange={handleChange(node.id)}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`${node.id}-content`}
                    id={`${node.id}-header`}
                  >
                    <CardHeader
                      className={classes.cardHeader}
                      avatar={
                        <Avatar>
                          <DevicesIcon />
                        </Avatar>
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
    </Container>
  );
};

export default Projects;
