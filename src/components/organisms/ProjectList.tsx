import React from 'react';
import parse from 'html-react-parser';
import { useI18next } from 'gatsby-plugin-react-i18next';
import {
  Typography,
  CardHeader,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Chip,
} from '@mui/material';
import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import { SvgAvatar } from 'src/components';
import {
  ContentfulIcon,
  ContentfulIconSvgTextNode,
  ContentfulProject,
  ContentfulTag,
  MarkdownRemark,
  Maybe,
} from 'src/types';

export type ProjectListProps = {
  projects: Array<{
    node: Pick<ContentfulProject, 'id' | 'node_locale' | 'name' | 'subName' | 'startDate'> & {
      tags: Maybe<Array<Maybe<Pick<ContentfulTag, 'name'>>>>;
      icon: Maybe<
        Pick<ContentfulIcon, 'name'> & { svg: Maybe<Pick<ContentfulIconSvgTextNode, 'svg'>> }
      >;
      detail: Maybe<{ childMarkdownRemark: Maybe<Pick<MarkdownRemark, 'html'>> }>;
    };
  }>;
};

/**
 * プロジェクト一覧
 */
export const ProjectList: React.FC<ProjectListProps> = ({ projects }) => {
  const { language } = useI18next();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (id: string) => (_event: React.SyntheticEvent, isExpanded: boolean) => {
    setExpanded(isExpanded ? id : false);
  };

  return (
    <div>
      {projects.map(
        ({ node }) =>
          node.node_locale === language && (
            <section>
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
                  <div>
                    <Typography variant="body1" component="div">
                      {node.subName}
                    </Typography>
                    <Typography variant="body2" component="div">
                      {node?.detail?.childMarkdownRemark?.html &&
                        parse(node.detail.childMarkdownRemark.html)}
                    </Typography>
                  </div>
                </AccordionDetails>
              </Accordion>
            </section>
          ),
      )}
    </div>
  );
};
