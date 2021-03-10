import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
import { Typography, Grid, Button, makeStyles, Paper, CardHeader } from '@material-ui/core';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { BicstoneIcon } from '../';
import { useBreakPoint } from '../../hooks';
import { HelloDataQuery } from '../../types';

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: theme.spacing(1),
  },
}));

export const Hello: React.FC = () => {
  const classes = useStyles();
  const { t, language } = useI18next();
  const width = useBreakPoint();
  const BUTTON_SMALL_WIDTH: Breakpoint[] = ['xs'];
  const { allContentfulHello }: HelloDataQuery = useStaticQuery(
    graphql`
      query HelloData {
        allContentfulHello(sort: { fields: sortKey, order: ASC }) {
          edges {
            node {
              id
              node_locale
              name
              href
            }
          }
        }
      }
    `,
  );

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container spacing={2} justify="center" alignItems="center">
          <Grid item>
            <BicstoneIcon width={100} height={100} />
          </Grid>
          <Grid item xs={12} sm={10}>
            <Paper>
              <CardHeader
                title={
                  <Typography component="span" variant="h6" paragraph>
                    {t('hello.title')}
                  </Typography>
                }
                subheader={
                  <>
                    <Typography variant="body1" paragraph>
                      {t('hello.description')}
                    </Typography>

                    {allContentfulHello.edges.map(
                      ({ node }) =>
                        node.node_locale === language && (
                          <Button
                            href={node.href || ''}
                            variant="outlined"
                            color="secondary"
                            size={BUTTON_SMALL_WIDTH.includes(width) ? 'small' : 'medium'}
                            rel="external noreferrer noopener nofollow"
                            className={classes.button}
                            key={node.id}
                          >
                            {node.name}
                          </Button>
                        ),
                    )}
                  </>
                }
              />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
