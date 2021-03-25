import React from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';
import {
  Typography,
  Grid,
  LinearProgress,
  Card,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
} from '@material-ui/core';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';
import { CollapseResponsiveController } from 'src/components';
import { ContentfulSkillMap, ContentfulTag, Maybe } from 'src/types';

export type SkillListProps = {
  skills: Array<{
    node: Pick<ContentfulSkillMap, 'id' | 'name' | 'node_locale' | 'expanded'> & {
      skills: Maybe<Array<Maybe<Pick<ContentfulTag, 'id' | 'level' | 'name'>>>>;
    };
  }>;
};

/**
 * スキルリスト
 */
export const SkillList: React.FC<SkillListProps> = ({ skills }) => {
  const { language } = useI18next();
  const defaultExpandedBreakpoints: Breakpoint[] = ['xl', 'lg', 'md'];

  return (
    <Grid container spacing={2}>
      {skills.map(
        ({ node }) =>
          node.node_locale === language && (
            <Grid item xs={12} sm={6} md={4} key={node.id}>
              <Card>
                <CollapseResponsiveController
                  defaultExpanded={node.expanded || false}
                  defaultExpandedBreakpoints={defaultExpandedBreakpoints}
                >
                  <Accordion component="section">
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls={`${node.id}-content`}
                      id={`${node.id}-header`}
                    >
                      <Typography component="h2" variant="h6">
                        {node.name}
                      </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                      <Box width="100%" paddingY={2} paddingX={2}>
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
                      </Box>
                    </AccordionDetails>
                  </Accordion>
                </CollapseResponsiveController>
              </Card>
            </Grid>
          ),
      )}
    </Grid>
  );
};
