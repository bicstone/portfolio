import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
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
import { ExpandCardContent } from '../../components';
import { QualificationMapDataQuery } from '../../types';

export const Qualifications: React.FC = () => {
  const { language } = useI18next();
  const defaultExpandedBreakpoints: Breakpoint[] = ['lg', 'xl', 'md'];
  const { allContentfulQualificationMap }: QualificationMapDataQuery = useStaticQuery(
    graphql`
      query QualificationMapData {
        allContentfulQualificationMap(sort: { order: ASC, fields: sortKey }) {
          edges {
            node {
              id
              node_locale
              name
              expanded
              qualifications {
                id
                name
                date(formatString: "yyyy/MM")
              }
            }
          }
        }
      }
    `,
  );

  return (
    <Grid container spacing={2}>
      {allContentfulQualificationMap.edges.map(
        ({ node }) =>
          node.node_locale === language && (
            <Grid item xs={12} sm={6} md={4} key={node.id}>
              <Card>
                <ExpandCardContent
                  id={node.id}
                  defaultExpanded={node.expanded || false}
                  defaultExpandedBreakpoints={defaultExpandedBreakpoints}
                  title={
                    <Typography component="h3" variant="h6">
                      {node.name}
                    </Typography>
                  }
                  detail={
                    <CardContent>
                      <List dense={true}>
                        {node?.qualifications?.map(
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
