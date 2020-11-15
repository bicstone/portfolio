import React from 'react';
import parse from 'html-react-parser';
import { graphql, useStaticQuery } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
import {
  makeStyles,
  Typography,
  Grid,
  Avatar,
  CardActionArea,
  CardContent,
  Card,
  SvgIcon,
} from '@material-ui/core';
import { ContactDataQuery } from '../../types';

const useStyles = makeStyles(theme => ({
  cardContent: {
    paddingTop: 0,
  },
  avatarLarge: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    marginLeft: 'auto',
    marginRight: 'auto',
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export const Contacts: React.FC = () => {
  const classes = useStyles();
  const { language } = useI18next();
  const { allContentfulContact }: ContactDataQuery = useStaticQuery(
    graphql`
      query ContactData {
        allContentfulContact(sort: { order: ASC, fields: sort }) {
          edges {
            node {
              id
              node_locale
              title
              subTitle
              href
              icon {
                contents {
                  contents
                }
              }
            }
          }
        }
      }
    `,
  );

  return (
    <Grid container spacing={2} justify="center" alignItems="center">
      {allContentfulContact.edges.map(
        ({ node }) =>
          node.node_locale === language && (
            <Grid item xs={12} sm={4} key={node.id}>
              <CardActionArea
                title={node.title || ''}
                href={node.href || ''}
                rel="external noreferrer nofollow"
                target="_blank"
              >
                <Card>
                  <Avatar className={classes.avatarLarge}>
                    {node?.icon?.contents?.contents && (
                      <Avatar>
                        <SvgIcon>{parse(node.icon.contents.contents)}</SvgIcon>
                      </Avatar>
                    )}
                  </Avatar>
                  <CardContent className={classes.cardContent}>
                    <Typography component="h3" variant="h6" align="center">
                      {node.title}
                    </Typography>
                    <Typography variant="body1" color="textSecondary" align="center">
                      {node.subTitle}
                    </Typography>
                  </CardContent>
                </Card>
              </CardActionArea>
            </Grid>
          ),
      )}
    </Grid>
  );
};
