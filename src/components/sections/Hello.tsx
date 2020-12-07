import React, { useEffect, useRef } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { useI18next } from 'gatsby-plugin-react-i18next';
import Typed, { TypedOptions } from 'typed.js';
import { Typography, Grid, Button, makeStyles } from '@material-ui/core';
import { Breakpoint } from '@material-ui/core/styles/createBreakpoints';
import { BicstoneIcon } from '../';
import { useBreakPoint, useDarkMode } from '../../hooks';
import { HelloDataQuery } from '../../types';

const useStyles = makeStyles(theme => ({
  button: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export const Hello: React.FC = () => {
  const classes = useStyles();
  const { t, language } = useI18next();
  const width = useBreakPoint();
  const BUTTON_SMALL_WIDTH: Breakpoint[] = ['xs'];
  const wrapEl = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (wrapEl.current) {
      const options: TypedOptions = {
        typeSpeed: 60,
        showCursor: false,
        autoInsertCss: false,
        strings: [t('hello.title')],
      };
      // @see https://github.com/mattboldt/typed.js/pull/461
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore: Typedの型定義が誤っており、HTMLSpanElementは割当可能
      const typed = new Typed(wrapEl.current, options);
      return () => {
        typed.destroy();
      };
    }
  }, [wrapEl.current]);
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
          <Grid item xs={11} sm={10}>
            <Typography component="span" variant="h6">
              <span ref={wrapEl} />
              &nbsp;
            </Typography>
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
                    target="_blank"
                    className={classes.button}
                    key={node.id}
                  >
                    {node.name}
                  </Button>
                ),
            )}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};
