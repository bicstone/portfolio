import React from 'react';
import parse from 'html-react-parser';
import { useI18next } from 'gatsby-plugin-react-i18next';
import {
  makeStyles,
  Typography,
  CardHeader,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Chip,
} from '@material-ui/core';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import { SvgAvatar } from 'src/components';
import {
  ContentfulIcon,
  ContentfulIconSvgTextNode,
  ContentfulProject,
  ContentfulTag,
  MarkdownRemark,
  Maybe,
} from 'src/types';

const useStyles = makeStyles(() => ({
  cardHeader: {
    padding: 0,
  },
}));

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
  const classes = useStyles();
  const { language } = useI18next();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (id: string) => (event: React.ChangeEvent<Record<string, unknown>>, isExpanded: boolean) => {
      setExpanded(isExpanded ? id : false);
    };

  return (
    <>
      {projects.map(
        ({ node }) =>
          node.node_locale === language && (
            <Accordion
              expanded={expanded === node.id}
              onChange={handleChange(node.id)}
              key={node.id}
              component="section"
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`${node.id}-content`}
                id={`${node.id}-header`}
              >
                <CardHeader
                  className={classes.cardHeader}
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
          ),
      )}
    </>
  );
};
