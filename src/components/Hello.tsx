import React, { useEffect, useRef } from 'react';
import { useI18next } from 'gatsby-plugin-react-i18next';
import Typed, { TypedOptions } from 'typed.js';

import { Typography, Grid, Container } from '@material-ui/core/';
import { makeStyles } from '@material-ui/core/styles';

import BicstoneIcon from './BicstoneIcon';

const useStyles = makeStyles(theme => ({
  mainGrid: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

const Hello: React.FC = () => {
  const classes = useStyles();
  const { t } = useI18next();
  const wrapEl = useRef<HTMLSpanElement>(null);
  const stringsEl = useRef<HTMLUListElement>(null);
  useEffect(() => {
    if (stringsEl.current && wrapEl.current) {
      const options: TypedOptions = {
        backDelay: 2000,
        typeSpeed: 40,
        showCursor: false,
        autoInsertCss: false,
        fadeOut: true,
        loop: true,
        stringsElement: stringsEl.current,
      };
      const typed = new Typed(wrapEl.current, options);
      return () => {
        typed.destroy();
      };
    }
  }, [stringsEl.current, wrapEl.current]);

  return (
    <Container maxWidth="md">
      <Grid container className={classes.mainGrid}>
        <Grid item xs={12}>
          <Grid container spacing={2} justify="center" alignItems="center">
            <Grid item>
              <BicstoneIcon width={100} height={100} />
            </Grid>
            <Grid item xs={11} sm={10}>
              <ul ref={stringsEl}>
                <li>{t('hello.title.1')}</li>
                <li>{t('hello.title.2')}</li>
                <li>{t('hello.title.3')}</li>
                <li>{t('hello.title.4')}</li>
                <li>{t('hello.title.5')}</li>
                <li>{t('hello.title.6')}</li>
              </ul>
              <Typography component="span" variant="body2">
                {t('hello.title.pref')}
                <span ref={wrapEl} />
              </Typography>
              <Typography variant="body1" paragraph>
                {t('hello-message')}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Hello;
