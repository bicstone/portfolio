import React from 'react';

import {
  Typography,
  Grid,
  Card,
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Chip,
} from '@mui/material';
import { Breakpoint } from '@mui/material/styles';
import { useI18next } from 'gatsby-plugin-react-i18next';

import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';

import { CollapseResponsiveController } from 'src/components';
import { IndexPageQuery } from 'src/types';

export type SkillListProps = {
  skills: IndexPageQuery['skills']['edges'];
};

/**
 * スキルリスト
 */
export const SkillList: React.FC<SkillListProps> = ({ skills }) => {
  const { language } = useI18next();
  const defaultExpandedBreakpoints: Breakpoint[] = ['xl', 'lg', 'md'];

  return (
    <Grid container spacing={2}>
      {skills
        .filter(({ node }) => node.node_locale === language)
        ?.map(({ node }) => (
          <Grid item xs={12} sm={6} md={4} key={node.id}>
            <Card component="section">
              <CollapseResponsiveController
                defaultExpanded={node.expanded || false}
                defaultExpandedBreakpoints={defaultExpandedBreakpoints}
              >
                <Accordion>
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
                    <div css={theme => ({ padding: theme.spacing(2) })}>
                      {node?.skillGroups?.map(skill => (
                        <div key={skill.id}>
                          <Typography component="h3" variant="subtitle1" gutterBottom>
                            {skill.name}
                          </Typography>
                          <ul
                            css={theme => ({
                              display: 'flex',
                              justifyContent: 'flex-start',
                              flexWrap: 'wrap',
                              listStyle: 'none',
                              margin: 0,
                              marginBottom: theme.spacing(2),
                              padding: 0,
                            })}
                          >
                            {skill.skills.map(skill => (
                              <li key={skill.id}>
                                <Chip variant="outlined" size="small" label={skill.name} />
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </AccordionDetails>
                </Accordion>
              </CollapseResponsiveController>
            </Card>
          </Grid>
        ))}
    </Grid>
  );
};
