import React, { useEffect, useRef } from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';
import Typed, { TypedOptions } from 'typed.js';
import { Typography, Grid, Container } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';
import { BicstoneIcon } from '../';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

export const Hello: React.FC = () => {
  const classes = useStyles();
  const { t } = useI18next();
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

  return (
    <Container maxWidth="md">
      <Grid container className={classes.mainGrid}>
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
                {t('hello.message')}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};
