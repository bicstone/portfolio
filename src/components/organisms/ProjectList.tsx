import React from 'react';

import {
  ExpandMore as ExpandMoreIcon,
  UnfoldMore as UnfoldMoreIcon,
  UnfoldLess as UnfoldLessIcon,
} from '@mui/icons-material';
import {
  Typography,
  CardHeader,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Chip,
  Button,
  useTheme,
} from '@mui/material';
import { useI18next } from 'gatsby-plugin-react-i18next';
import parse from 'html-react-parser';

import { SvgAvatar } from 'src/components';
import { IndexPageQuery } from 'src/types';

export type ProjectListProps = {
  projects: IndexPageQuery['projects']['edges'];
};

/**
 * プロジェクト一覧
 */
export const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  const theme = useTheme();
  const { language, t } = useI18next();
  const [expanded, setExpanded] = React.useState<string | boolean>(false);

  const handleChange = (id: string) => {
    setExpanded(expanded === id ? false : id);
  };

  return (
    <>
      <Typography align="right" paragraph>
        <Button
          css={{ backgroundColor: theme.palette.background.default }}
          variant="outlined"
          color="secondary"
          size="small"
          endIcon={expanded === false ? <UnfoldMoreIcon /> : <UnfoldLessIcon />}
          onClick={() => setExpanded(!expanded)}
          aria-label={t('home.projects.all-expand.hint')}
        >
          {expanded === false
            ? t('home.projects.label.all-more')
            : t('home.projects.label.all-less')}
        </Button>
      </Typography>
      {projects.map(
        ({ node }) =>
          node.node_locale === language && (
            <section key={node.id}>
              <Accordion
                expanded={expanded === node.id || expanded === true}
                onChange={() => handleChange(node.id)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`${node.id}-content`}
                  id={`${node.id}-header`}
                >
                  <CardHeader
                    css={{ padding: 0 }}
                    avatar={
                      <SvgAvatar name={node?.icon?.name || ''} svg={node?.icon?.svg?.svg || ''} />
                    }
                    title={
                      <>
                        <Typography variant="body2" component="div" color="textSecondary">
                          {node?.startDate}年
                        </Typography>
                        <Typography component="h2" variant="h6">
                          {node.name}
                        </Typography>
                      </>
                    }
                    subheader={
                      <Typography variant="body2" component="div" role="list" aria-label="tags">
                        {node.tags &&
                          node.tags.map(
                            tag =>
                              tag?.name && (
                                <Chip
                                  variant="outlined"
                                  size="small"
                                  key={tag.name}
                                  label={tag.name}
                                  role="listitem"
                                />
                              ),
                          )}
                      </Typography>
                    }
                    disableTypography
                  />
                </AccordionSummary>
                <AccordionDetails>
                  <>
                    <Typography variant="body1" component="div">
                      {node.subName}
                    </Typography>
                    <Typography variant="body2" component="div">
                      {node?.detail?.childMarkdownRemark?.html &&
                        parse(node.detail.childMarkdownRemark.html)}
                    </Typography>
                  </>
                </AccordionDetails>
              </Accordion>
            </section>
          ),
      )}
    </>
  );
};
