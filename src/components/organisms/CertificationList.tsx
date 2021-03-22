import React from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';
import {
  Typography,
  Grid,
  List,
  ListItem,
  ListItemText,
  Card,
  CardContent,
} from '@material-ui/core';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { ExpandContent } from 'src/components';
import { ContentfulQualificationMap, ContentfulQualification, Maybe } from 'src/types';

export type CertificationListProps = {
  certification: Array<{
    node: Pick<ContentfulQualificationMap, 'node_locale' | 'id' | 'name' | 'expanded'> & {
      qualifications: Maybe<Array<Maybe<Pick<ContentfulQualification, 'id' | 'name' | 'date'>>>>;
    };
  }>;
};

export const CertificationList: React.FC<CertificationListProps> = ({ certification }) => {
  const { language } = useI18next();
  const defaultExpandedBreakpoints: Breakpoint[] = ['lg', 'xl', 'md'];

  return (
    <Grid container spacing={2}>
      {certification.map(
        ({ node }) =>
          node.node_locale === language && (
            <Grid item xs={12} sm={6} md={4} key={node.id} component="section">
              <Card>
                <ExpandContent
                  id={node.id}
                  defaultExpanded={node.expanded || false}
                  defaultExpandedBreakpoints={defaultExpandedBreakpoints}
                  title={
                    <Typography component="h2" variant="h6">
                      {node.name}
                    </Typography>
                  }
                  detail={
                    <CardContent>
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
                    </CardContent>
                  }
                />
              </Card>
            </Grid>
          ),
      )}
    </Grid>
  );
};
