import React from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';
import {
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  Accordion,
  AccordionDetails,
  AccordionSummary,
} from '@material-ui/core';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { CollapseResponsiveController } from 'src/components';
import { ContentfulQualificationMap, ContentfulQualification, Maybe } from 'src/types';
import { ExpandMore as ExpandMoreIcon } from '@material-ui/icons';

export type CertificationListProps = {
  certification: Array<{
    node: Pick<ContentfulQualificationMap, 'node_locale' | 'id' | 'name' | 'expanded'> & {
      qualifications: Maybe<Array<Maybe<Pick<ContentfulQualification, 'id' | 'name' | 'date'>>>>;
    };
  }>;
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
