import React from 'react';

import { ExpandMore as ExpandMoreIcon } from '@mui/icons-material';
import {
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@mui/material';
import { Breakpoint } from '@mui/material/styles';
import { useI18next } from 'gatsby-plugin-react-i18next';

import { CollapseResponsiveController } from 'src/components';
import { IndexPageQuery } from 'src/types';

export type CertificationListProps = {
  certification: IndexPageQuery['certification']['edges'];
};

/**
 * 資格一覧
 */
export const CertificationList: React.FC<CertificationListProps> = ({ certification }) => {
  const { language } = useI18next();
  const defaultExpandedBreakpoints: Breakpoint[] = ['lg', 'xl', 'md'];

  return (
    <Grid container spacing={2}>
      {certification.map(
        ({ node }) =>
          node.node_locale === language && (
            <Grid item xs={12} sm={6} md={4} key={node.id} component="section">
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
                    <List dense={true}>
                      {node.qualifications?.map(
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
              </CollapseResponsiveController>
            </Grid>
          ),
      )}
    </Grid>
  );
};
